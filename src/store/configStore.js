// Core
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger'; // eslint-disable-line import/no-extraneous-dependencies

// Reactron
import Reactotron from 'reactotron-react-native'; // eslint-disable-line import/no-extraneous-dependencies
import sagaPlugin from 'reactotron-redux-saga'; // eslint-disable-line import/no-extraneous-dependencies
import { reactotronRedux } from 'reactotron-redux'; // eslint-disable-line import/no-extraneous-dependencies
import rootSaga from './rootSaga';
import rootReducer from './rootReducer';

const withSagaMiddleware = ({ middlewares, options }) => {
  const sagaMiddleware = createSagaMiddleware(options);
  middlewares.push(sagaMiddleware);
  return sagaMiddleware;
};

const withLoggerMiddleware = ({ devEnv, middlewares }) => {
  if (!devEnv) {
    return undefined;
  }
  const logger = createLogger({
    duration: true,
    collapsed: true,
    colors: {
      title: () => '#139BFE',
      prevState: () => '#1C5FAF',
      action: () => '#149945',
      nextState: () => '#A47104',
      error: () => '#ff0005',
    },
  });
  middlewares.push(logger);
  return logger;
};

const withReactotronMiddleware = ({ devEnv, enhancers }) => {
  if (!devEnv) {
    return undefined;
  }
  Reactotron.configure({
    name: 'Dulcipass',
    enabled: true,
    host: '192.168.100.68', // server ip - User1
    // host: '192.168.100.89', // server ip - User2
    port: 9090,
  })
    .useReactNative()
    .use(reactotronRedux())
    .use(sagaPlugin());

  Reactotron.connect(); // Connect with reactotron
  Reactotron.clear(); // Clear the logs.
  enhancers.push(Reactotron.createEnhancer());
  return Reactotron.createSagaMonitor();
};

const configureStore = (devEnv) => async ({ deserializeState, serializeState }) => {
  const middlewares = [];
  const enhancers = [];
  const reactotronMiddleware = withReactotronMiddleware({ devEnv, enhancers });
  const sagaMiddleware = withSagaMiddleware({
    middlewares,
    options: {
      sagaMonitor: reactotronMiddleware,
    },
  });
  withLoggerMiddleware({ devEnv, middlewares });

  const middlewareEnhancer = applyMiddleware(...middlewares);
  const composeEnhancers = devEnv && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
  const composedEnhancers = composeEnhancers(...[middlewareEnhancer, ...enhancers]);

  let preloadedState;
  if (deserializeState) {
    preloadedState = await deserializeState();
  }
  const store = createStore(rootReducer, preloadedState, composedEnhancers);
  if (serializeState) {
    store.subscribe(() => {
      serializeState(store.getState());
    });
  }

  sagaMiddleware.run(rootSaga);

  return store;
};

// eslint-disable-next-line no-undef
export default configureStore(__DEV__);

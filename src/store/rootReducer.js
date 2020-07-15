// Core
import { combineReducers } from 'redux';

// Reducers
import theme from 'react-native-theming/src/modules/theme/reducers';

const combinedReducers = combineReducers({
  theme,
});

const rootReducer = (state, action) => combinedReducers(state, action);

export default rootReducer;

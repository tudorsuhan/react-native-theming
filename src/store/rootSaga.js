// Core
import { all, fork } from 'redux-saga/effects';

// Sagas
import theme from 'react-native-theming/src/modules/theme/sagas/watchers';

export default function* rootSaga() {
  yield all([
    fork(theme),
  ]);
}

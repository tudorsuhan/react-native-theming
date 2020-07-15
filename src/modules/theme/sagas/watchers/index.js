// Core
import {
  all, fork, takeEvery,
} from 'redux-saga/effects';

// Actions
import themeActions from 'react-native-theming/src/modules/theme/actions';

// Workers
import themeWorkers from 'react-native-theming/src/modules/theme/sagas/workers';

function* watchGetThemes() {
  yield takeEvery(themeActions.getThemes, themeWorkers.getThemes);
}

function* watchSetActiveTheme() {
  yield takeEvery(themeActions.setActiveTheme, themeWorkers.setActiveTheme);
}

export default function* () {
  yield all([
    fork(watchGetThemes),
    fork(watchSetActiveTheme),
    fork(themeWorkers.initialize),
  ]);
}

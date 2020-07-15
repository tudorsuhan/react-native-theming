/* eslint-disable global-require */
// Core
import { put, call, take } from 'redux-saga/effects';

// Actions
import themeActions from 'react-native-theming/src/modules/theme/actions';

// Storage
import AsyncStorage from '@react-native-community/async-storage';

function* getThemes() {
  let themes;
  try {
    themes = require('react-native-theming/src/modules/theme/utils/themes.json');
    yield put(themeActions.getThemesSuccess());
  } catch (error) {
    yield put(themeActions.getThemesFailure({ error }));
  } finally {
    yield put(themeActions.getThemesFulfill({ themes: themes || [] }));
  }
}

function* setActiveTheme({ payload: { theme } }) {
  try {
    yield call(AsyncStorage.setItem, '@theme', theme);
  } catch (error) {
    console.log(error);
  }
}

function* initialize() {
  let theme = yield call(AsyncStorage.getItem, '@theme');
  if (!theme) {
    theme = 'DEFAULT';
  }

  yield put(themeActions.getThemes());
  yield take(themeActions.getThemesFulfill);
  yield put(themeActions.setActiveTheme({ theme }));
}

export default {
  initialize,
  setActiveTheme,
  getThemes,
};

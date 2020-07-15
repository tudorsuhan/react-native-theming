// Core
import { createAction } from 'redux-actions';

const getThemes = createAction('GET_THEMES_REQUEST');

const getThemesSuccess = createAction('GET_THEMES_REQUEST_SUCCESS');

const getThemesFailure = createAction('GET_THEMES_REQUEST_FAILURE', ({ error }) => ({ error }));

const getThemesFulfill = createAction('GET_THEMES_REQUEST_FULFILL', ({ themes }) => ({ themes }));

const setActiveTheme = createAction('SET_ACTIVE_THEME', ({ theme }) => ({ theme }));

export default {
  getThemes,
  getThemesSuccess,
  getThemesFailure,
  getThemesFulfill,
  setActiveTheme,
};

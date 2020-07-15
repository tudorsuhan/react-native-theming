// Core
import { createSelector } from 'reselect';

const getTheme = (state) => state.theme;

const getActiveThemeKey = createSelector(
  getTheme,
  (theme) => theme.theme,
);

const getThemes = createSelector(
  getTheme,
  (theme) => theme.themes,
);

const getActiveTheme = createSelector(
  getThemes,
  getActiveThemeKey,
  (themes, active) => themes.find((theme) => theme.key === active) || {},
);

export default {
  getActiveTheme,
  getActiveThemeKey,
  getThemes,
};

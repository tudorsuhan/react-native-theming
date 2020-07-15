// Core
import { handleActions } from 'redux-actions';

// Actions
import themeActions from 'react-native-theming/src/modules/theme/actions';

const initialState = {
  theme: null,
  themes: [],
};

const handleGetThemesFulfill = (state, { payload: { themes } }) => ({
  ...state,
  themes,
});

const handleSetActiveTheme = (state, { payload: { theme } }) => ({
  ...state,
  theme,
});

export default handleActions(
  {
    [themeActions.getThemesFulfill]: handleGetThemesFulfill,
    [themeActions.setActiveTheme]: handleSetActiveTheme,
  },
  initialState,
);

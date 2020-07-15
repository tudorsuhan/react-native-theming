// Core
import { connect } from 'react-redux';

// Actions
import themeActions from 'react-native-theming/src/modules/theme/actions';

// Selectors
import themeSelectors from 'react-native-theming/src/modules/theme/selectors';

// Components
import Themes from './Themes';

const mapStateToProps = (state) => ({
  themes: themeSelectors.getThemes(state),
  themekey: themeSelectors.getActiveThemeKey(state),
});

const mapDispatchToProps = {
  setActiveTheme: themeActions.setActiveTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(Themes);

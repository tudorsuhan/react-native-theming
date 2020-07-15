// Core
import React from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';

// Components
import Theme from 'react-native-theming/src/modules/theme/components/Themes';

// Selectors
import themeSelectors from 'react-native-themeing/src/modules/theme/selectors';

const Home = ({ theme }) => (
  <>
    <Theme />
    <Text style={{ color: theme.color }}>Home</Text>
  </>
);

const mapStateToProps = (state) => ({
  theme: themeSelectors.getActiveTheme(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

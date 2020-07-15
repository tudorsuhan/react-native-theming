// Core
import React from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity, View, Text,
} from 'react-native';

// Styles
import styles from './styles';

const Themes = ({ themes, setActiveTheme }) => (
  <View>
    <Text style={styles.heading}>Choose a theme</Text>
    <View style={styles.themes}>
      {themes.map((t) => (
        <TouchableOpacity onPress={() => setActiveTheme({ theme: t.key })} key={t.key} style={styles.theme}>
          <View style={[styles.color, { backgroundColor: t.backgroundColor }]} />
          <Text style={styles.text}>{t.key}</Text>
        </TouchableOpacity>
      ))}
    </View>
  </View>
);

Themes.propTypes = {
  themes: PropTypes.arrayOf(PropTypes.object),
  theme: PropTypes.shape({
    key: PropTypes.string,
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
  }),
  item: PropTypes.shape({
    key: PropTypes.string,
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
  }),
  setActiveTheme: PropTypes.func,
};

Themes.defaultProps = {
  themes: null,
  theme: null,
  item: null,
  setActiveTheme: () => {},
};

export default Themes;

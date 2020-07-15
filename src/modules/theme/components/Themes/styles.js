// Core
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
  },
  themes: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  theme: {
    width: 60,
    height: 60,
  },
  color: {
    width: 60,
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#EEE',
  },
  text: {
    color: '#444',
    marginTop: 5,
    fontSize: 10,
    textAlign: 'center',
  },
});

export default styles;

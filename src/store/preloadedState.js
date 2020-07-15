import AsyncStorage from '@react-native-community/async-storage';

const deserializeState = async () => {
  try {
    const values = await AsyncStorage.getItem('@dulcipass');
    await new Promise((resolve) => setTimeout(resolve, 500));
    return values ? JSON.parse(values) : undefined;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
    return undefined;
  }
};

const serializeState = (state) => {
  try {
    const { settings } = state;
    const stateSlice = { settings };
    const values = JSON.stringify(stateSlice);
    AsyncStorage.setItem('@dulcipass', values);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
};

export default {
  deserializeState,
  serializeState,
};

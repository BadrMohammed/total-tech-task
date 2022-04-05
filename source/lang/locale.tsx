/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-community/async-storage';
// import ar from './ar';
import en from './en';

 function setCurrentLang() {
  // const currentLang = await AsyncStorage.getItem('lang');
  // if (!currentLang) {
  //   return en;
  // }
  // return currentLang === 'en' ? en : ar;
  return en;
}

const locale = {lang: setCurrentLang()};

const toggleLang = (lang: string) => {
  AsyncStorage.setItem('lang', lang.toLowerCase());
  locale.lang = setCurrentLang();

  //restrart app
};

export {locale, toggleLang};

import i18n from 'i18next';
import {I18nManager} from 'react-native';
import {initReactI18next} from 'react-i18next';
import languages from './locales';
import AsyncStorage from '@react-native-community/async-storage';
import RNRestart from 'react-native-restart';

export default 
i18n
.use(initReactI18next) // passes i18n down to react-i18next
.init({
  resources:languages,
  lng: I18nManager.isRTL ? 'ar' : 'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
})


export const checkIsFristOpenForApp = async () => {
  const fristTimeOpen = await AsyncStorage.getItem('frist');
  if (fristTimeOpen === null) {
    ChangeLangugaeToArabic();
    await AsyncStorage.setItem('frist', 'frist');
  }
};

const ChangeLangugaeToArabic = () => {
  i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar').then(() => {
    I18nManager.forceRTL(i18n.language === 'ar');
    RNRestart.Restart();
  });
};

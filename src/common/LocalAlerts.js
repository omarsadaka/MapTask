
import Snackbar from 'react-native-snackbar';
import {Colors, Fonts} from '../theme';
import {I18nManager, Share} from 'react-native';

export const showInfo = message => {
  Snackbar.show({
    title: message,
    duration: Snackbar.LENGTH_LONG,
    backgroundColor: Colors.yellow,
    // fontFamily: Fonts.Ubuntu_R,
    numberOfLines: 6,
    action: {
      ttitle: I18nManager.isRTL?'إغلاق':'close',
      color: Colors.white,
    },
  });
};

export const showSuccess = (message) => {
  Snackbar.show({
    title: message,
    duration: Snackbar.LENGTH_LONG,
    backgroundColor: Colors.green,
    // fontFamily: Fonts.Ubuntu_R,
    numberOfLines: 6,
    action: {
      title: I18nManager.isRTL?'إغلاق':'close',
      color: Colors.white,
    },
  });
};

export const showError = (message) => {
  Snackbar.show({
    title: message,
    duration: Snackbar.LENGTH_LONG,
    backgroundColor: Colors.red,
    // fontFamily: Fonts.Ubuntu_R,
    numberOfLines: 6,
    action: {
      title: I18nManager.isRTL?'إغلاق':'close',
      color: Colors.white,
    },
  });
};


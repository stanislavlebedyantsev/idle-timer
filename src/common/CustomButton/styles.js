import {StyleSheet} from 'react-native';

import {
  COLOR_WHITE,
  DEFAULT_BUTTON_BLUE,
  COLOR_DISABLED,
} from '@/themes/colors';
import {XLARGE_FONT} from '@/themes/fonts';

export const styles = StyleSheet.create({
  buttonActive: {
    backgroundColor: DEFAULT_BUTTON_BLUE,
    width: '40%',
    height: '50%',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: COLOR_DISABLED,
    width: '40%',
    height: '50%',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: COLOR_WHITE,
    fontSize: XLARGE_FONT,
  },
});

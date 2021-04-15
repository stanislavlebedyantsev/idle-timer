import {StyleSheet} from 'react-native';
import {COLOR_BLUE} from '@/themes/colors';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  timer: {
    flex: 2,
    backgroundColor: 'black',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  controlButtons: {
    flex: 1,
    backgroundColor: COLOR_BLUE,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  laps: {
    flex: 4,
  },
});

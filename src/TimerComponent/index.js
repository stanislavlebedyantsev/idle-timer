import React, {useState, useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';

import LapSelection from '@/common/LapSelection';
import CustomButton from '@/common/CustomButton';
import CircularProgress from '@/common/CircularProgress';

import {styles} from './styles';
import {LAP_LINEARE_GRADIENT} from '@/themes/colors';

const TimerComponent = () => {
  const [timerLapState, setTimerLapState] = useState([]);
  const [timerStartState, setTimerStartState] = useState(false);
  const [currentTimerState, setCurrentTimerState] = useState(0);

  const onPressTimerStart = () => {
    setTimerStartState(previousTimerState => !previousTimerState);
    if (!timerStartState) {
      setCurrentTimerState(0);
      setTimerLapState([]);
    }
  };
  const onPressTimerLap = () => {
    setTimerLapState(previousTimerLapState => [
      ...previousTimerLapState,
      currentTimerState,
    ]);
    setCurrentTimerState(0);
  };

  useEffect(() => {
    let timer;
    if (timerStartState) {
      timer = setInterval(() => {
        setCurrentTimerState(previousTimerState => {
          return previousTimerState + 100;
        });
      }, 100);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [timerStartState]);

  return (
    <View style={styles.root}>
      <View style={styles.timer}>
        <CircularProgress
          fill={moment(currentTimerState).format('mm')}
          text="min"
        />
        <CircularProgress
          fill={moment(currentTimerState).format('ss')}
          text="sec"
        />
        <CircularProgress
          fill={moment(currentTimerState).milliseconds() / 10}
          text="msec"
        />
      </View>
      <View style={styles.controlButtons}>
        <CustomButton
          onPress={onPressTimerStart}
          title={timerStartState ? 'Stop' : 'Start'}
        />
        <CustomButton
          onPress={onPressTimerLap}
          title="Lap"
          disabled={!timerStartState}
        />
      </View>
      <LinearGradient colors={LAP_LINEARE_GRADIENT} style={styles.laps}>
        <ScrollView
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {timerLapState.map((element, index) => (
            <LapSelection
              index={index}
              lapValue={element}
              key={element + index}
            />
          ))}
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default TimerComponent;

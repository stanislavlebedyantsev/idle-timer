/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import type {Node} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import moment from 'moment';
import LapSelection from './src/common/LapSelection/component';
import CustomButton from './src/common/CustomButton/component';
import CircularProgress from './src/common/CircularProgress/component';

const App: () => Node = () => {
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
    timerStartState
      ? (timer = setInterval(() => {
          setCurrentTimerState(previousTimerState => {
            return previousTimerState + 100;
          });
        }, 100))
      : clearInterval(timer);
    return () => {
      clearInterval(timer);
    };
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
          title={'Lap'}
          disabled={!timerStartState}
        />
      </View>
      <ScrollView
        style={styles.laps}
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
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  timer: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  controlButtons: {
    flex: 0.5,
    backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  laps: {
    backgroundColor: 'skyblue',
  },
});

export default App;

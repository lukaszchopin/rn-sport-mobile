import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react';
import styles from './styles';
import Bar from '../bar';
import { Colors, Metrics } from '../../../../global/themes/index';


const multiBar = ({
  steps,
  stepsMax,
  distance,
  distanceMax,
  energy,
  energyMax,
  itemCount,

}) => (
  <View
    style={styles.container}
  >


    <View
      style={styles.barsContainer}
    >
      <Bar
        unit="s"
        value={steps}
        color={Colors.appColors.dark.a}
        itemCount={itemCount}
        maxValue={stepsMax}
        maxHeight={150}
      />
      <Bar

        itemCount={itemCount}
        unit="km"
        value={distance}
        color={Colors.appColors.dark.b}
        maxValue={distanceMax}
        maxHeight={150}
      />
      <Bar
        itemCount={itemCount}
        color={Colors.appColors.dark.c}
        unit="cal"
        value={energy}
        maxValue={energyMax}
        maxHeight={150}
      />

    </View>
  </View>
);
export default observer(multiBar);

Bar.propTypes = {
  // progress: PropTypes.number,
  // dayName: PropTypes.string,
  // points: PropTypes.number,
  // record: PropTypes.number,
  // goal: PropTypes.number,
};

Bar.defaultProps = {
  // progress: 0,
  // dayName: '',
  // points: 0,
  // record: 0,
  // goal: 0,
};

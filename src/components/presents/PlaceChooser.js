import React from 'react';
import {
	View,
	TouchableOpacity,
	TextInput,
	StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
	ctnChooser: {

	},
	ctnTop: {

	},
	icBack: {

	},
	ctnStart: {

	},
	icStart: {

	},
	inStart: {

	},
	ctnStop: {

	},
	icStop: {

	},
	inStop: {

	}


});
const PlaceChooser = ({start, onStartChange, onStopChange, onStartFocus, onStopFocus}) => (
	<View style={styles.ctnChooser}>
		<View style={styles.ctnTop}>
			<Icon name="back" style={styles.icBack} />
		</View>
		<View style={styles.ctnStart}>
			<Icon name="circle" style={styles.icStart}/>
			<TextInput style={styles.inStart} placeholder="Chọn điểm đón" onChangeText={onStartChange} value={start} onFocus={onStartFocus}/>
		</View>
		<View style={styles.ctnStop}>
			<Icon name="circle" style={styles.icStop}/>
			<TextInput style={styles.inStop} placeholder="Bạn muốn đi đâu" onChangeText={onStopChange} onFocus={onStopFocus}/>
		</View>
	</View>
);
export default PlaceChooser;
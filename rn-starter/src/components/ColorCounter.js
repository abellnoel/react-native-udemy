import React from 'react'; 
import { View, Text, StyleSheet, Button } from 'react-native';

//onIncrease and onDecrease are callback function passed in as props
//child component is almost directly calling setColor from SquareScreen
const ColorCounter = ({ color, onIncrease, onDecrease }) => {
    return (
        <View>
            <Text>{color}</Text>
            <Button 
                title={`Increase ${color}`} 
                onPress={() => onIncrease()}
            />
            <Button 
                title={`Decrease ${color}`} 
                onPress={() => onDecrease()}                
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ColorCounter;
import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button, ActionSheetIOS } from 'react-native';

const AMOUNT = 10;

const reducer = (state, action) => {
    // state === {counter: number}
    // action === { type: increase_count || decrease_count, payload: +-AMOUNT}
    switch (action.type) {
        case "increase_count":
            return {...state, counter: state.counter + action.payload}; 
        case "decrease_count":
            return {...state, counter: state.counter + action.payload};
        default:
            return state
    }
}

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, {counter: 0});
    const {counter} = state;
    return (
        <View>
            <Button 
                title="Increase" 
                onPress={() => {
                    dispatch({type: "increase_count", payload: AMOUNT}); 
                }}
            />
            <Button 
                title="Decrease" 
                onPress={() => {
                    dispatch({type: "decrease_count", payload: -1 * AMOUNT});
                }}
            />
            <Text>Current Count: {counter}</Text>
        </View>
    );
}

const styles = StyleSheet.create({});

export default CounterScreen;
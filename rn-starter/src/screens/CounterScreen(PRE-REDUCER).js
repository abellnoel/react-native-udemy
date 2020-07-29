import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
    /*
        - this does NOT work properly (commented code is old code)
        - rn does not magically watch a variable
        - there is no auto detection of variables changing in these components
        - this can be solved by using a certain react function
    */
    //let counter = 0;
    /*
        - useState initializes a new piece of state (tracked data)
        - 0 is the inital value 
        - left side is array destructuring

        const colors = ['red', 'green'];
        colors[0] -> red or colors[1] -> green
        const [colorOne, colorTwo] = colors; similar to soloLearn destructuring

        - state that changes overtime (counter) should not be modified directly
    */
    const [counter, setCounter] = useState(0);

    return (
        <View>
            <Button 
                title="Increase" 
                onPress={() => {
                    //updates it directly, we DONT want this (changed directly)
                    //counter++
                    setCounter(counter + 1); //not modifying counter 
                }}
            />
            <Button 
                title="Decrease" 
                onPress={() => {
                    //counter--
                    setCounter(counter - 1);
                }}
            />
            <Text>Current Count: {counter}</Text>
        </View>
    );
}

const styles = StyleSheet.create({});

export default CounterScreen;
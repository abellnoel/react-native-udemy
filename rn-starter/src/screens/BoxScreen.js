import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.parentStyle}>
            <View style={styles.viewOneStyle}></View>
            <View style={styles.viewTwoStyle}></View>
            <View style={styles.viewThreeStyle}></View>
        </View>
    );
}

/*
Parent Item Defaults
    - alignItems => stretch 
        - flex-start, center, flex-end
    - flexDirection => column
        - row
    -justifyContent => flex-start
        -center, flex-end, space-between, space-around
Child Item
    - flex 
        - numbers, proportional to all flex numbers added under a parent
    - alignSelf
        - override alignItems from parent
        - flex-end, center, flex-start, stretch 
Position  
    - position => relative
        - absolute -> ignores siblings, but obeys some rules set by parent
    - top, bottom, left, and right
        - extra space added after items are rendered on screen
        - no other siblings are affected (can overlap items)
Filling up entire parent
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0, 
    left: 0
Shortcut
    ...StyleSheet.absoluteFillObject
*/
const styles = StyleSheet.create({
    parentStyle: {
        height: 150,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    viewOneStyle: {
        height: 75,
        width: 100,
        backgroundColor: "rgb(255, 153, 153)"
    },
    viewTwoStyle: {
        height: 75,
        width: 100,
        backgroundColor: "rgb(153, 255, 153)",
        //GREEN POSITION METHOD 1
        //top: 75
        //GREEN POSITION METHOD 2
        //marginTop: 75
        //GREEN POSITION METHOD 2
        alignSelf: "flex-end", //with proper parent height
    },
    viewThreeStyle: {
        height: 75,
        width: 100,
        backgroundColor: "rgb(153, 153, 255)"
    }
});

export default BoxScreen;
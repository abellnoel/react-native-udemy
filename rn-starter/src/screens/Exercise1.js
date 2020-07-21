import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ExerciseScreen1 = () => {
    const myName = "Noel Abellanosa"

    return (
        <View>
            <Text style={styles.headerStyle}>
                Getting started with React Native!
            </Text>
            <Text style={styles.textStyle}>
                My name is {myName}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 45
    },
    textStyle: {
        fontSize: 20
    }
});

export default ExerciseScreen1;


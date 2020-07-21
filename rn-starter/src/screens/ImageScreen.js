import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
//custom created component
import ImageDetail from '../components/ImageDetail'; //.. goes up a directory

const ImageScreen = () => {
    return (
        <View>
            <Text style={styles.headStyle}>Image Screen</Text>
            {/*
                - Able to use custom component as we usually use JSX
                - We are making our own props here, can be named anything
                - Passing these props from parent (Screen) to child (Detail)
                - ImageDetail is essentailly being executed 3 different times
            */}
            <ImageDetail title="Forest"//remember strings don't have to be
                         imgSrc={require("../../assets/forest.jpg")}
                         rating={10}//numbers in JSX must be in JS curly braces
            />
            <ImageDetail title="Beach"
                         imgSrc={require("../../assets/beach.jpg")}
                         rating={8}
            />
            <ImageDetail title="Mountain"
                         imgSrc={require("../../assets/mountain.jpg")}
                         rating={9}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    headStyle: {
        fontSize: 30
    }
});

export default ImageScreen;
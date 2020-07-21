import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

//referencing specific props instead of the entire props object
//this also removes the requirement of doing props.propHere
const ImageDetail = ({ imgSrc, title, rating }) => {
    //console.log(props);
    return (
    <View>
        {/*
            - source is an Image primitive prop 
            - props.imgSrc is our custom passed prop from ImageScreen
        */}
        <Image source={imgSrc} />
        <Text>{title}</Text>
        <Text>User rating - {rating}</Text>
    </View>
    );
}

const styles = StyleSheet.create({
});

export default ImageDetail;
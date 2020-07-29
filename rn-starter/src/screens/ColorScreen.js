import React, { useState } from 'react';
import { View, StyleSheet, Button, FlatList } from 'react-native';

const ColorScreen = () => {
    const [colors, setColors] = useState([]);
    //console.log(colors);
    
    return (
        <View>
            {/*
                - since we cannot directly change colors...
                - we make a copy of it and add a new randomRgb to the end of it
            */}
            <Button 
                title="Add a Color" 
                onPress={() => {
                    setColors([...colors, randomRgb()])
                }}
            />
            {/*
                - using item directly as key since it is the randomRgb string
                - remember, destructuring element's item memeber here
            */}
            <FlatList
                keyExtractor={item => item}
                data={colors}
                renderItem={({ item }) => {
                    return <View style={{ 
                                    height: 100, 
                                    width: 100, 
                                    backgroundColor: item}} 
                            />
                }}
            />
        </View>
    );
}

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}

const styles = StyleSheet.create({});

export default ColorScreen;

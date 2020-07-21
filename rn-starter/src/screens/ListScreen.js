import React from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native'; //import primitive

const ListScreen = () => {
    const heading = "List Screen"

    const friends = [ //array of records we want to turn into a list
        { name: 'Annastasia', age: 21 },
        { name: 'Austin', age: 20}, 
        { name: 'Trevor', age: 20 },
        { name: 'Joshua', age: 20 },
        { name: 'Jazzmyn', age: 21 },
        { name: 'Carlos', age: 22 }, 
        { name: 'Grace', age: 24}
        /* 1. Keys method 1
        { name: 'Annastasia', key: '1' },
        { name: 'Austin', key: '2'}, 
        { name: 'Trevor', key: '3' },
        { name: 'Joshua', key: '4' },
        { name: 'Jazzmyn', key: '5' },
        { name: 'Carlos', key: '6' }, 
        { name: 'Grace', key: '7' }
        */
    ];

    //props: data and renderItem
    return (
        <View>
            <Text style={styles.headStyle}>{heading}</Text>
            <FlatList //multilined JSX
                //horizontal -> horizontal={true};
                //horizontal //lists elements horizontally 
                //showsHorizontalScrollIndicator={false} //hides horizontal scroll bar
                
                //called with every object in array
                //return some unique string per object, name in this case is unique
                keyExtractor={friend => friend.name} 
                //FlatList required props data and renderItem
                data={friends}
                renderItem={({ item }) => { //DESTRUCTURING, not entirely clear
                    //element is not simply the objects on our data list
                    //element === { item: { name: 'Friend #1'}, index: 0}
                    //we can usually just pull off the  item property
                    //item === { name: 'Friend #1'} (or whatever friend)

                    //not using 'keys' with lists causes RN to rebuild lists on update
                    //keys allow us to track different objects passed in and 
                    //automatically clean up corresponding objects 
                    //preformance optimization for changing sets of data

                    //REQUIREMENTS FOR KEYS
                    //1. Must be a string
                    //2. Must be consistent between renders
                    //3. Must be unique compared to all other objects in data
                    //WAYS TO IMPLEMENT KEYS
                    //1. Add key property to each entry in original dataset
                    //2. KeyExtractor, adding key prop in runtime
                    return (
                        <Text style={styles.textStyle}>
                            {item.name} - Age {item.age}
                        </Text>
                    );
                }}
            /> 
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: { //style name can be anything
        marginVertical: 50 //creates vertical height between elements
    },
    headStyle: {
        fontSize: 30
    }
});

export default ListScreen;
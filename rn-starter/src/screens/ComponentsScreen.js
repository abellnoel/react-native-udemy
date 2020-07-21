import React from 'react'; 
import { Text, StyleSheet, View } from 'react-native';

//const creates a read-only reference to a value
//value is not immutable but the identifier cannot be reassigned -> const
const ComponentsScreen = () => {
    //JSX as a variable
    const heading = <Text style={styles.textStyle}>Components Screen</Text>;
    //text as a variable to be used in Text JSX
    const greeting = "Suh bitch..."

    //ways to return JSX
    return (//parenthesis allow you to return multiple lines of JS
        <View>
            {heading} 
            <Text>{greeting}</Text>
        </View>
    );

    //return without parens
    /*
    return <View>
        {heading} 
        <Text>{greeting}</Text>
    </View>
    */

    //COMMON ERROR, RETURNS NOTHING INTERPRETED AS return;
    /*
    return 
    <View>
        {heading} 
        <Text>{greeting}</Text>
    </View>
    */
};

const styles = StyleSheet.create({//{} js object
    textStyle: {
        fontSize: 30
    }
});

//so this can be used somewhere else in the project
export default ComponentsScreen;
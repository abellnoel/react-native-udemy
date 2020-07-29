import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
    const [password, setPassword] = useState(""); 
    return (
        <View>
            <Text>Enter Password:</Text>
            {/*
                - by default TextInput has 0 styling other than size 
                - iOS default: auto first letter capitalized, autocorrect
                - android: some versions have auto first letter capitalized
                - there are properties for this in TextInput
            */}
            <TextInput 
                /*
                    - this may look fine, but React has a different way of 
                      accessing and modifying data in parent-child relationships
                    - you rarely ever want a parent to reach down to a child and
                      inspect state or data tied to it 
                    - instead, we are going to pass down a value prop along with
                      a callback function that will set the state in the parent
                      upon some event (onChangeText in this case)
                    - parent is telling child what the current value is (even
                      though in this case it looks like the child already knows
                      through TextInput)
                    - parent now has constant access to what is in TextInput
                      through name and setName rather than having to read child
                */
                style={styles.input}
                autoCapitalize="none" //has different options rather than t/f
                autoCorrect={false} //defaults to true
                value={password}
                onChangeText={(newValue) => setPassword(newValue)}
            />
            {password.length > 5 
                ? null 
                : <Text>Password must be longer than 5 characters</Text>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15, //space around element
        borderColor: 'black',
        borderWidth: 1
    }
}); 

export default TextScreen; 
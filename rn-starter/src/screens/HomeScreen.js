import React from "react";
//view imported to wrap text and button
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

/*
  - components recieve props from the stack navigator in the first argument
  - we destructure navigation out of props as we rarely want access to all props
  - this props object is specifically GIVEN to this component (or others) when it
    is shown by the react navigator
*/
const HomeScreen = ({ navigation }) => { //destructuring navigation from props
  return <View>
    <Text style={styles.text}>Dumb Bitch Gone MOBILE!</Text>
    {/*
      - Button is very simple and limited, for more advanced use, 
        TouchableOpacity is the element to use
      - Button is self closing
      - Has default styling
    */}
    <Button 
      title='Go to Components Demo' 
      onPress={() => navigation.navigate("Components")}
    /> 
    <Button
      title="Go to List Demo"
      onPress={() => navigation.navigate("List")}
    />
    <Button
      title="Go to Image Demo"
      onPress={() => navigation.navigate("Image")}
    />
    <Button
      title="Go to Counter Demo"
      onPress={() => navigation.navigate("Counter")}
    />
    <Button
      title="Go to Color Demo"
      onPress={() => navigation.navigate("Color")}
    />
    <Button
      title="Go to Square Demo"
      onPress={() => navigation.navigate("Square")}
    />
    <Button
      title="Go to Text Demo"
      onPress={() => navigation.navigate("Text")}
    />
    {/*
      - Any elements inside touchable opacity will detect taps
      - Automatically adds fade effect to anything inside creating user feedback
    */}
    {/* Not using this here since we really only want buttons atm
    <TouchableOpacity onPress={() => props.navigation.navigate("List")}>
      <Text>Go to List Demo</Text>
    </TouchableOpacity>
    */}
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
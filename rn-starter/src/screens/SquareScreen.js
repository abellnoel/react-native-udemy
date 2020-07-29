import React, { useReducer } from 'react'; 
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

//reducer function by convention defined outside the component function as
//there will be two variables floating around named state making it confusing
//action -> how to change state object
const reducer = (state, action) => {
    //state === {red: #, green: #, blue: $};
    //action === {colorToChange: r/g/b, amount: 15 || -15}
    /*CONVENTIONS FOR REDUCERS
        action(ex.) === {type: 'change_red', payload: 15}
            -type: string that describes exact change operation
            -payload: data that is critical to change operation
    */
    switch (action.type) {
        case "change_red":
            //never directly modify the state value
            //never do something like state.red = state.red - 15
            //copying orginal state, overwriting red with added amount
            return state.red + action.payload > 255 || state.red + action.payload < 0
                ? state
                : {...state, red: state.red + action.payload};
        case "change_green":
            return state.green + action.payload > 255 || state.green + action.payload < 0
            ? state
            : {...state, green: state.green + action.payload};
        case "change_blue":
            return state.blue + action.payload > 255 || state.blue + action.payload < 0
            ? state
            : {...state, blue: state.blue + action.payload};
        default:
            return state; //return state object no matter what 
    }
}

const SquareScreen = () => {
    //dispatch (convention) -> run the reducer
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
    //console.log(state) // {red: 0, green: 0, blue: 0}
    const { red, green, blue } = state;

    return (
        <View>
            {/*
                - For callbacks, we are essentially passing down the ability
                  to add/subtract the color variables 
            */}
            <ColorCounter 
                color="Red"
                onIncrease={() => dispatch({type: "change_red", 
                                            payload: COLOR_INCREMENT})}
                onDecrease={() => dispatch({type: "change_red", 
                                            payload: -1 * COLOR_INCREMENT})}
            />
            <ColorCounter 
                color="Green"
                onIncrease={() => dispatch({type: "change_green", 
                                            payload: COLOR_INCREMENT})}
                onDecrease={() => dispatch({type: "change_green", 
                                            payload: -1 * COLOR_INCREMENT})}
            />
            <ColorCounter 
                color="Blue"
                onIncrease={() => dispatch({type: "change_blue", 
                                            payload: COLOR_INCREMENT})}
                onDecrease={() => dispatch({type: "change_blue", 
                                            payload: -1 * COLOR_INCREMENT})}
            />
            <View 
                style={{ 
                    height: 150, 
                    width: 150,
                    backgroundColor: `rgb(${red}, ${green}, ${blue})`
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;
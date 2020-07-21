import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
//direct reference to function, file extensions not requried
import ComponentsScreen from "./src/screens/ComponentsScreen";
//Section 2, Exercise 1 practice screen
import ExerciseScreen1 from "./src/screens/Exercise1";
//Section 3, List practice
import ListScreen from "./src/screens/ListScreen";
//Section 5, reusable components with images
import ImageScreen from "./src/screens/ImageScreen";

/*
  - the stack navigator is responsible for deciding which screen to show
  - when it shows any of these components, it renders them and passes props
  - the props object has MANY different options
*/
const navigator = createStackNavigator(
  {//route object
    Home: HomeScreen,
    Components: ComponentsScreen, //now possible option for SN to show user
    Exercise1: ExerciseScreen1,
    List: ListScreen,
    Image: ImageScreen
  },
  {
    initialRouteName: "Home", //first component to be displayed
    defaultNavigationOptions: {
      title: "Best App 2020"
    }
  }
);

export default createAppContainer(navigator);

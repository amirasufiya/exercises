import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Game Zone',
      // headerStyle: { backgroundColor: '#eee'}
    }
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: 'Review Details',
      // headerStyle: { backgroundColor: 'red'}
    }
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444', //color of fonts
    headerStyle: { backgroundColor: '#eee', height: 60},
  }
});

export default createAppContainer(HomeStack);

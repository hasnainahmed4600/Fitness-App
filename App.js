
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/Screens/Home'
import FinishScreen from './src/Screens/Finish'
import CalenderScreen from './src/Screens/calender'
import PlayScreen from './src/Screens/Play'
import ConfirmScrenn from './src/Screens/Confirm'

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Finish: FinishScreen,    
    Calender: CalenderScreen,
    Play: PlayScreen,
    Confirm: ConfirmScrenn
  },
  {
    initialRouteName: 'Home',
  }
);


export default createAppContainer(AppNavigator);







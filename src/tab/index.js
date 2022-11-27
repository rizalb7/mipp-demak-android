import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { OpdStackScreen, PemerintahStackScreen, PublikStackScreen } from "../screen";
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  const optionTabScreen = {
    headerShown: false, 
    tabBarHideOnKeyboard: true,
    tabBarLabelStyle: {
      fontSize:11,
      marginBottom: 1
    }
  }
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color}) => {
            let iconName;

            if (route.name === 'Layanan Publik') {
              iconName = focused ? 'earth' : 'earth-outline';
            } else if (route.name === 'Layanan Pemerintah') {
              iconName = focused ? 'briefcase' : 'briefcase-outline';
            } else if (route.name === 'OPD') {
              iconName = focused ? 'business' : 'business-outline';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={30} color={color} style={{marginTop: 2}}/>;
          },
          tabBarActiveTintColor: 'dodgerblue',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          name="Layanan Publik"
          component={PublikStackScreen}
          options={optionTabScreen}
        />
        <Tab.Screen
          name="Layanan Pemerintah"
          component={PemerintahStackScreen}
          options={optionTabScreen}
        />
        <Tab.Screen
          name="OPD"
          component={OpdStackScreen}
          options={optionTabScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ViewPublik from './src/ViewPublik';
import ViewPemerintah from './src/ViewPemerintah';
import ViewOpd from './src/ViewOpd';
import ViewWebsite from './src/ViewWebsite';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const PublikStack = createStackNavigator();
const PemerintahStack = createStackNavigator();
const OpdStack = createStackNavigator();

const PublikStackScreen = () => (
  <PublikStack.Navigator>
    <PublikStack.Screen name="PublikScreen" component={ViewPublik} options={{headerTitle:'Layanan Publik', headerTitleAlign:'center'}}/>
    <PublikStack.Screen name="ViewWebsite" component={ViewWebsite} options={({route}) => ({title: route.params.judul, headerTitleAlign:'center'})}/>
  </PublikStack.Navigator>
)

const PemerintahStackScreen = () => (
  <PemerintahStack.Navigator>
    <PemerintahStack.Screen name="PemerintahScreen" component={ViewPemerintah} options={{headerTitle:'Layanan Administrasi Pemerintah', headerTitleAlign:'center'}}/>
    <PemerintahStack.Screen name="ViewWebsite" component={ViewWebsite} options={({route}) => ({title: route.params.judul, headerTitleAlign:'center'})}/>
  </PemerintahStack.Navigator>
)

const OpdStackScreen = () => (
  <OpdStack.Navigator>
    <OpdStack.Screen name="OpdScreen" component={ViewOpd} options={{headerTitle:'OPD', headerTitleAlign:'center'}}/>
    <OpdStack.Screen name="ViewWebsite" component={ViewWebsite} options={({route}) => ({title: route.params.judul, headerTitleAlign:'center'})}/>
  </OpdStack.Navigator>
)

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Layanan Publik') {
              iconName = focused
                ? 'earth'
                : 'earth-outline';
            } else if (route.name === 'Layanan Pemerintah') {
              iconName = focused ? 'briefcase' : 'briefcase-outline';
            } else if (route.name === 'OPD') {
              iconName = focused ? 'business' : 'business-outline';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'dodgerblue',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Layanan Publik" component={PublikStackScreen} options={{headerShown: false}}/>
        <Tab.Screen name="Layanan Pemerintah" component={PemerintahStackScreen} options={{headerShown: false}}/>
        <Tab.Screen name="OPD" component={OpdStackScreen} options={{headerShown: false}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
import React from "react"
//import * as react from 'react';
//import { View, Text, Button,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./pages/Login";
import Home from "./pages/Home";
import { DataProvider } from "./context/DataContext";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeEditoras from './pages/HomeEditoras';
import HomeEditora from "./pages/HomeEditora";

/*function LoginScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login Screen</Text>
        <Button
          title="Go to Login"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    );




function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
function DetailsScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>

<TouchableOpacity onPress={()=>navigation.navigate('Home')}>
            <Text>go to home</Text>
          </TouchableOpacity>
      </View>
    );
  }

const Stack = createNativeStackNavigator();

/*function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );*/
//function*/

const TabBottomNavigation = createBottomTabNavigator();
const BottomNavigator = ()=>{

  return(
    <TabBottomNavigation.Navigator
    screenOptions = {{
      headerShown: false,
      tabBarStyle: {backgroundColor :'#ffcc00'},
      tabBarActiveBackgroundColor: 'green',
      tabBarActiveTintColor: 'red'
    }}
    >
      <TabBottomNavigation.Screen name ="HomeTab" component = {Home}
      options ={{
        title: 'Home',
        tabBarIcon : () => (<Ionicons name = 'home' color='#000'size = {24}/>)
      }}
      />
      <TabBottomNavigation.Screen name ="HomeEditoraTab" component = {HomeEditoras}
      options ={{
        title: 'Home Editoras',
        tabBarIcon : () => (<Ionicons name = 'library' color='#000'size = {24}/>)
      }}
      />
    </TabBottomNavigation.Navigator>

  );
}

const Stack = createNativeStackNavigator();

  const App =() =>{
    return (
      <DataProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
          <Stack.Screen name = "Login" component ={Login}
          options={{title:"Login" , headerStyle:{backgroundColor: '#54b695'}
           }} />
         <Stack.Screen name="BottomNavigatorScreen" component={BottomNavigator} 
          options={{title:"Home" , headerStyle:{backgroundColor: '#54b695'}
        }} />
        <Stack.Screen name="HomeEditora" component={HomeEditora} />
        </Stack.Navigator>
      </NavigationContainer>

</DataProvider>
    );









   /* const App = () => {
      return (
        <DataProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
              <Stack.Screen name="Login component={Login} />
              <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
            </Stack.Navigator>
          </NavigationContainer>
        </DataProvider>
      );*/
    }








  


export default App;



//<Stack.Screen name="Details" component={DetailsScreen} />



/*import Login from "./pages/Login";
import Home from './pages/Home';

export default () =>{

    return(
        <Home/>
    );*/

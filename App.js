import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Perfil from './component/Perfil';
import Galeria from './component/Galeria';
import Perfil1 from './component/Perfil1';
import Perfil2 from './component/Perfil2';
import Perfil3 from './component/Perfil3';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

const App = ()=>{
  return (
    <NavigationContainer>

      <Drawer.Navigator
        screenOptions={({ route }) => ({
          drawerIcon: ({ focused, size }) => {
            let iconName;
            if (route.name === 'Perfil') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Perfil1') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Perfil2') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Perfil3') {
              iconName = focused ? 'person' : 'person-outline';
            }
            return <Ionicons name={iconName} size={size} color={focused ? '#007AFF' : '#8e8e93'} />;
          },
        })}
      >
        <Drawer.Screen name="Professor Carvalho" component={Perfil} />
        <Drawer.Screen name="Bulbassauro" component={Perfil1} />
        <Drawer.Screen name="Charmander" component={Perfil2} />
        <Drawer.Screen name="Squirtle" component={Perfil3} />
      </Drawer.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 

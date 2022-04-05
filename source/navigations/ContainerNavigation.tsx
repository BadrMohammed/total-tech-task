/* eslint-disable prettier/prettier */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signin from '../pages/Signin/Signin';
import Repository from '../pages/Repository/Repository';
import RepositoryDetails from '../pages/Repository/RepositoryDetails';
const Stack = createNativeStackNavigator();
function ContainerNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={Signin} options={{title: ''}} />
        <Stack.Screen
          name="Repository"
          component={Repository}
          options={{title: ''}}
        />
        <Stack.Screen
          name="Details"
          component={RepositoryDetails}
          options={{title: ''}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ContainerNavigation;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginPage } from './pages/login';
import { RegisterPage } from './pages/register';
import { TasksPage } from './pages/tasks';

const Stack = createNativeStackNavigator();

export function RootNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="login" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="login" component={LoginPage} />
                <Stack.Screen name="register" component={RegisterPage} />
                <Stack.Screen name="tasks" component={TasksPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

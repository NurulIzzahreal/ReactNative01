import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "./screens/Home";
import About from "./screens/About";
import Contact from "./screens/Contact";

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Kontak">
                <Stack.Screen
                  name="Home"
                  component={Home}
                  options={{headerShown: false}}
                />
                <Stack.Screen name="About" component={About} />
                <Stack.Screen name="Kontak" component={Contact} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
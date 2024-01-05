import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PokemonGeneralView from "./src/PokemonGeneralView";
import PokemonDetailScreen from "./src/PokemonDetailScreen";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="PokemonList" component ={PokemonGeneralView}/>
          <Stack.Screen name="PokemonDetail" component={PokemonDetailScreen}/>
      </Stack.Navigator>x
    </NavigationContainer>
  );
}

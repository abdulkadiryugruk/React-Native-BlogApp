import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AntDesign from "@expo/vector-icons/AntDesign";
import HomeScreen from "../../screens/HomeScreen";
import CreateScreen from "../../screens/CreateScreen";
import ShowScreen from "../../screens/ShowScreen";
import EditScreen from "../../screens/EditScreen";

import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Provider } from "../../context/BlogContext";
import { TouchableOpacity } from "react-native";

const Stack = createNativeStackNavigator();

const index = () => {
  return (
    <Provider>
      <NavigationContainer independent={true}>
        <Stack.Navigator screenOptions={{ headerTitle: "blog uygulamasi" }}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={({ navigation }) => ({
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                  <AntDesign name="plus" size={24} color="black" />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen name="Create" component={CreateScreen} />
          <Stack.Screen name="Show" component={ShowScreen} 
          options={({ navigation, route }) => ({
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("Edit", {id: route.params.id})}>
                <FontAwesome6 name="pencil" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}/>
          <Stack.Screen name="Edit" component={EditScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default index;

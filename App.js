import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import React from "react"
import { Text, TouchableOpacity } from "react-native"

// Screens
import HomeScreen from "./src/screens/HomeScreen"
import TaskFormScreen from "./src/screens/TaskFormScreen"

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: "Task App",
            headerTitleStyle: { color: "black" },
            headerRight: () => (
              <TouchableOpacity
                className="mr-4"
                onPress={() => navigation.navigate("taskFormScreen")}
              >
                <Text className="text-black">New</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="taskFormScreen"
          component={TaskFormScreen}
          options={{ title: "Create a Task" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

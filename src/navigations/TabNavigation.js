import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { MonthlyCalendar } from "../screens/MonthlyCalendar";
// import { Home } from "../screens/Home";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { Calendar, Agenda } from "react-native-calendars";
import { NavigationContainer } from "@react-navigation/native";

const TabIcon = ({ name, size, color }) => {
  return <MaterialCommunityIcons name={name} size={size} color={color} />;
};

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  const navigation = useNavigation();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Calendar"
        component={MonthlyCalendar}
        options={{
          headerShown: false,
          tabBarIcon: (props) => TabIcon({ ...props, name: "calendar" }),
        }}
      />
      <Tab.Screen
        name={"hi"}
        component={EmptyScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TouchableOpacity onPress={() => navigation.navigate("hi")}>
              <View
                style={{
                  width: 55,
                  height: 55,
                  backgroundColor: "#1B4B66",
                  borderRadius: 30,
                  justifyContent: "center",
                  alignItems: "center",
                  // marginBottom: Platform.OS == "android" ? 50 : 30,
                  marginBottom: Platform.OS == "android" ? 20 : 10,
                }}
              >
                <Image
                  source={require("../../image/plus.png")}
                  style={{
                    width: 22,
                    height: 22,
                    tintColor: "white",
                  }}
                ></Image>
              </View>
            </TouchableOpacity>
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="TODO List"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: (props) => TabIcon({ ...props, name: "calendar-check" }),
        }}
      />
    </Tab.Navigator>
  );
};

function EmptyScreen() {
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
}
function Home() {
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
}

export default TabNavigation;

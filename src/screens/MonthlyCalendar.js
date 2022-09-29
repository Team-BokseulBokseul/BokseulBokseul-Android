import React from "react";
import { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { Calendar } from "react-native-calendars";

export const MonthlyCalendar = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ marginTop: 50 }}>
      <Calendar
        onDayPress={(day) => {
          alert(day.dateString);
        }}
      />
    </View>
  );
};

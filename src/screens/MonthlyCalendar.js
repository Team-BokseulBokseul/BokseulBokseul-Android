import React from "react";
import { useState } from "react";
import { format } from "date-fns";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Switch,
} from "react-native";
import { LocaleConfig, Calendar, Agenda } from "react-native-calendars";
import { SafeAreaView } from "react-native-safe-area-context";

LocaleConfig.locales["fr"] = {
  monthNames: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ],
  monthNamesShort: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ],
  dayNames: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  today: "오늘",
};
LocaleConfig.defaultLocale = "fr";

export function CalendarView() {
  const posts = [
    {
      id: 1,
      title: "제목입니다.",
      contents: "내용입니다.",
      date: "2022-02-26",
    },
    {
      id: 2,
      title: "제목입니다.",
      contents: "내용입니다.",
      date: "2022-02-27",
    },
  ];
  const markedDates = posts.reduce((acc, current) => {
    const formattedDate = format(new Date(current.date), "yyyy-MM-dd");
    acc[formattedDate] = { marked: true };
    return acc;
  }, {});

  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), "yyyy-MM-dd")
  );
  const markedSelectedDates = {
    ...markedDates,
    [selectedDate]: {
      selected: true,
      marked: markedDates[selectedDate]?.marked,
    },
  };

  const [modalVisible, setModalVisible] = useState(false);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View>
      <Calendar
        style={styles.calendar}
        markedDates={markedSelectedDates}
        theme={{
          selectedDayBackgroundColor: "#1B4B66",
          arrowColor: "#1B4B66",
          dotColor: "#1B4B66",
          todayTextColor: "#1B4B66",
        }}
        onDayPress={(day) => {
          setSelectedDate(day.dateString);
          setModalVisible(true);
        }}
        enableSwipeMonths={true}
      />
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.modalTitle}>하루 기록</Text>
              </View>
              <View style={styles.modalBackground}>
                <View style={[styles.modalBox, { marginBottom: 0 }]}>
                  <Text style={styles.modalText}>기분을 선택해줘</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: 0,
                  }}
                >
                  <View
                    style={[
                      styles.modalBox,
                      styles.modalHalfBox,
                      { marginBottom: 0 },
                    ]}
                  >
                    <Text style={styles.modalText}>어제 수면 시간</Text>
                  </View>
                  <View
                    style={[
                      styles.modalBox,
                      styles.modalHalfBox,
                      { marginBottom: 0 },
                    ]}
                  >
                    <Text style={styles.modalText}>약 복용</Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.modalBox,
                    { flexDirection: "row", justifyContent: "space-between" },
                  ]}
                >
                  <Text style={styles.modalText}>
                    하루 동안 유의미한 감정 기복이 있었어?
                  </Text>
                  <Switch
                    trackColor={{ false: "#767577", true: "#1B4B66" }}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style={{ margin: 5 }}
                  />
                </View>
                <View>
                  <Text
                    style={{ fontSize: 20, fontWeight: "bold", margin: 10 }}
                  >
                    오늘의 질문
                  </Text>
                  <Text
                    style={{ fontSize: 13, fontWeight: "bold", margin: 10 }}
                  >
                    1. 약을 먹고 불편한 점이 있었다면 자세히 알려줘
                  </Text>
                  <Text
                    style={{ fontSize: 13, fontWeight: "bold", margin: 10 }}
                  >
                    2. 특별한 생활 사건들에 대해 자세히 알려줘
                  </Text>
                  <Text
                    style={{ fontSize: 13, fontWeight: "bold", margin: 10 }}
                  >
                    3. 오늘 하루를 떠올리고 아래 표에서 어울리는 나의 상태를
                    골라줘
                  </Text>
                </View>
              </View>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>저장</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

export const MonthlyCalendar = () => {
  // const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ marginTop: 50 }}>
      <View style={{ backgroundColor: "white", padding: 18 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>최지우님,</Text>
        <Text style={{ fontSize: 20 }}>
          오늘의 날짜를 눌러 기분을 입력해주세요
        </Text>
      </View>
      <CalendarView></CalendarView>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
  calendar: {
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: "100%",
    height: "90%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    padding: 0,
    paddingTop: 37,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    justifyContent: "center",
  },
  buttonClose: {
    backgroundColor: "#1B4B66",
    width: 129,
    height: 44,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalTitle: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "bold",
  },
  modalBackground: {
    backgroundColor: "#EFEFF0",
    borderRadius: 16,
    margin: 0,
    marginBottom: 10,
    width: "90%",
  },
  modalBox: {
    backgroundColor: "white",
    margin: 10,
    borderRadius: 16,
  },
  modalHalfBox: {
    // width: "50%",
  },
  modalText: {
    fontSize: 16,
    fontWeight: "bold",
    margin: 10,
  },
});

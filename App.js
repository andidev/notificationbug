/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import PushNotification from "react-native-push-notification";


const App: () => Node = () => {

    const [notifications, setNotifications] = useState([]);

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
          <View style={{height: 40}}></View>

          <Button onPress={() => {

              PushNotification.localNotification({
                  channelId: 'DELIVERY_NOTIFICATIONS',
                  id: '123',
                  tag: 'DELIVERY',
                  title: "My Notification Title", // (optional)
                  message: "My Notification Message", // (required)
                  autoCancel: true, // Remove when user press notification
              });



          }} title={"Create Notification"} />
          <View style={{height: 10}}></View>

          <Button onPress={() => {
              PushNotification.cancelAllLocalNotifications();

          }} title={"Clear Notifications"} />

          <View style={{height: 10}}></View>
          <Button onPress={async () => {
              alert('asdasd');
              PushNotification.getDeliveredNotifications(ns => {
                  if (!ns) {
                      return;
                  }
                  alert(JSON.stringify(ns, null, 2));
                  setNotifications( ns )
              } )


          }} title={"Show Current"} />
          <View style={{height: 10}}></View>
          <View>{notifications.map(n => (
              <Text>
                  {JSON.stringify(n, null, 2)}
              </Text>
          ))}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

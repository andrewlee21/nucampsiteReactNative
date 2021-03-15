import React, { Component } from "react";
import { Text, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import * as Animatable from 'react-native-animatable';


class Contact extends Component {
  static navigationOptions = {
    title: "Contact Us",
  };

  render() {
    return (
      <ScrollView style={{ backgroundColor: "#EEE" }}>
        <Card title="Contact Information" wrapperStyle={{ margin: 20 }}>
          <Text style={{ marginBottom: 10 }}>
            1 Nucamp Way{"\n"}
            Seattle, WA 98001{"\n"}
            U.S.A.{"\n"}
            {"\n"}
            Phone: 1-206-555-1234{"\n"}
            Email: campsites@nucamp.co
          </Text>
        </Card>
      </ScrollView>
    );
  }
}

export default Contact;

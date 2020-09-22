import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const TheButton = (props) => (
    <TouchableOpacity
      color={props.color}
      onPress={props.onPress}
      style={{...styles.appButtonContainer, ...props.style}}
    >
      <Text style={{...styles.appButtonText, ...props.style}}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );

const styles = StyleSheet.create({
    appButtonContainer: {
      elevation: 8,
      backgroundColor: "#884fc9",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
      marginBottom: 5,
    },
    appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
    }
  });

export default TheButton
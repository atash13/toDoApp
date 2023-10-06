import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const customButton = ({onPress, title, bgColor}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: bgColor}]}
      onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      
    </TouchableOpacity>
  )
};

export default customButton;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: 'white',
    
  },
  button: {
    backgroundColor: 'black',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin:5,
    
  },
});
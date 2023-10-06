import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import CustomButton from './CustomButton';

const TodoItem = ({
  onChangeText,
  todo,
  deleteTodo,
  editIndex,
  editTodo,
  index,
  editText,
  cancelEdit,
  saveTodo,
}) => {
  return (
    <View style={styles.container}>
      {editIndex === index ? (
        <TextInput
          style={[styles.text]}
          value={editText}
          onChangeText={onChangeText}
          placeholderTextColor={'white'}
        />
      ) : (
        <Text style={styles.text}>{todo}</Text>
      )}
      {editIndex == index ? (
        <View>
          <CustomButton
            onPress={cancelEdit}
            title={'Vazgeç'}
            bgColor={'#dc2626'}
            
          />

          <CustomButton
            onPress={saveTodo}
            title={'Kaydet'}
            bgColor={'orange'}
            
          />
        </View>
      ) : (
        <View style={styles.btnBox}>
          <CustomButton
            onPress={deleteTodo}
            title={'Sil'}
            bgColor={'#dc2626'}
            
          />

          <CustomButton
            onPress={editTodo}
            title={'Güncelle'}
            bgColor={'#fbbf24'}
            
          />
               <CustomButton
            onPress={editTodo}
            title={'Tamamlandı'}
            bgColor={'#fbbf24'}
            
          />
        </View>
      )}
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#1f2937',
    paddingVertical: 10,
    margin: 5,
  alignItems:'center',
    justifyContent: 'space-between',
    padding:5,
    borderRadius:10
  },
  text: {
    fontSize: 30,
    color: 'white',
    paddingHorizontal: 25,
    paddingVertical: 15,
    width:'50%'
  },
  btnBox:{
    width:'50%'}
});
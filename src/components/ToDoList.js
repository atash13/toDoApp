import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import TodoItem from './ToDoItem';


const TodoList = ({todos, onDelete, onUpdate}) => {
  // console.log(todos)
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');
  //Güncelleme İşlemini Başlatıyor
  const startEditing = index => {
    setEditIndex(index);
    setEditText(todos[index]);
  };

  //Güncelleme İşlemini Bitiryor
  const cancelEditing = () => {
    setEditIndex(null);
    setEditText('');
  };

  //Todo yu güncelliyor

  const saveTodo = index => {
    onUpdate(index, editText);

    setEditIndex(null);
    setEditText('');
  };

  return (
    <View style={{marginTop: 10}}>
      <FlatList
        data={todos}
        ListEmptyComponent={() => {
          return (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                style={{width: 200, height: 200}}
                source={require('../assets/nttsh.jpg')}
                autoPlay
                loop
              />
            </View>
          );
        }}
        renderItem={({item, index}) => {
          return (
            <TodoItem
              index={index}
              todo={item}
              editIndex={editIndex}
              editText={editText}
              onChangeText={text => setEditText(text)}
              saveTodo={() => saveTodo(index)}
              cancelEdit={() => cancelEditing()}
              editTodo={() => startEditing(index)}
              deleteTodo={() => onDelete(index)}
            />
          );
        }}
      />
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({});

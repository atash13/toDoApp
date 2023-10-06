import { View, Text, TextInput,  SafeAreaView } from 'react-native'
import React, {useState} from 'react'
import CustomButton from '../components/CustomButton';
import TodoList from '../components/ToDoList';

export default function HomeScreen() {

    const [todos, setTodos] = useState([]);

    const [todoText, setTodoText] = useState('');

    const addTodo = () => {
        if (todoText) {
          setTodos([...todos, todoText]);
          setTodoText('');
        }
      };
    //Todo Silen Fonksiyon
      const deleteTodo = index => {
        const newTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    
        setTodos(newTodos);
      };

      const updateTodo=(index,newText)=>{

        const updatedTodos=[...todos]
        updatedTodos[index]=newText
        setTodos(updatedTodos)
        
        }

  return (
    <SafeAreaView>
      <View style={{backgroundColor:'purple', padding:10, flexDirection:'row', justifyContent:'space-between', borderRadius:10}}>
        <TextInput className="bg-indigo-200, p-3, text-3xl, rounded-xl, text-white" style={{backgroundColor:'#a832a2', padding:10, fontSize:28, borderRadius:10, color:'white'}}
        placeholder='Please enter what to do'
        placeholderTextColor={'gray'}
        value={todoText}
        onChangeText={text=> setTodoText(text)}
        />
        <CustomButton 
        title='Add'
        onPress={() => addTodo()}
        bgColor={'#4D3C77'}
        />
      </View>
      <View>
      <TodoList todos={todos} onDelete={deleteTodo} onUpdate={updateTodo} />
      </View>
    </SafeAreaView>
  )
}
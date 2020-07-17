import React, { useState } from 'react';
import {StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';


export default function App() {

  const [name, setName] = useState('Miras');
  const [age, setAge] = useState('33');
  const [person, setPerson] = useState({ name: 'Mario', age: 22});
  const [location, setLocation] = useState([
    { state: 'Melaka', key: '1' },
    { state: 'Selangor', key: '2' },
    { state: 'KL', key: '3' },
    { state: 'Johor', key: '4' },
    { state: 'Kelantan', key: '5' },
    { state: 'Terengganu', key: '6' },
    { state: 'Perlis', key: '7' },
  ]);

  const clickHandler = () => {
    setName('Amira Sufiya');
    setAge(100);
    setPerson({name: 'Mariana', age: 40});
  }

  const pressHandler = (key) => {
    console.log(key);
    setLocation((prevLocation) => {
      return prevLocation.filter(venue => venue.key != key)
    })
  }

  return (
      <View style={styles.container}>
        <Text>My name is {name}, age {age}</Text>
        {/* <Text>His name is {person.name} and his age is {person.age}</Text> */}
        <Text>What is your name?</Text>
        <TextInput 
          multiline
          keyboardType='default'
          style = {styles.input}
          placeholder='eg. Yada yada' 
          onChangeText={(val) => setName(val)}/>

        <Text>What is your age?</Text>
        <TextInput 
          multiline
          keyboardType='numeric'
          style = {styles.input}
          placeholder='eg. 120' 
          onChangeText={(val) => setAge(val)}/>

        <View style={styles.buttonContainer}>
          <Button title='Update name' onPress={clickHandler} />
        </View>

        {/* dynamic, item is the object in each iteration */}
        {/* { location.map((item) => {
          return (
            <View key={item.key}>
              <Text>{item.state}</Text>
            </View>
            )
        })} */}
        {/* <ScrollView>
        { location.map(item2 => (
            <View key={item2.key}>
              <Text style={styles.item}>{item2.state}</Text>
            </View>
          )
        )}
        </ScrollView> */}
       
        {/* no need key on FlatList as it auto, less code, better performance */}
        {/* key is like the id */}
        <FlatList
          numColumns={2}
          keyExtractor={(item) => item.key} 
          data={location}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => pressHandler(item.key)}>
              <Text style={styles.item}>{item.state}</Text>
            </TouchableOpacity>
            
          )
        } 
        />
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      // alignItems: 'center',
      // justifyContent: 'center',
      paddingTop: 40,
      paddingHorizontal: 20,
    },
    buttonContainer: {
      marginTop: 20
    },
    input: {
      borderWidth: 1,
      borderColor: '#777',
      padding: 8,
      margin: 10,
      width: 200,
    },
    item: {
      marginTop: 24,
      padding: 30,
      backgroundColor: 'pink',
      fontSize: 24,
      marginHorizontal: 10,
      marginTop: 24,
    }
});
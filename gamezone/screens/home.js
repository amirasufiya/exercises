import React, {useState} from 'react';
import { StyleSheet, View, Text, FlatList, 
  TouchableWithoutFeedback, TouchableOpacity, Modal, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ReviewForm from '../screens/reviewForm';

export default function Home({ navigation }) {
  
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    { title: '3 idiots', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
  ]);

  const addReview = (review)  => {
    review.key = Math.random().toString();
    setReviews((currentReviews) => {
      return [review, ...currentReviews]
    });
    setModalOpen(false);
  }
  
  return (
    <View style={globalStyles.container}>


      <Modal visible={modalOpen} animationType='slide'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <Icon 
            name="close" 
            type="material-icons" 
            size={24} 
            onPress={() => setModalOpen(false)} 
            style={{...styles.modalToggle, ...styles.modalClose}}
            />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <Icon 
        name="add" 
        type="material-icons" 
        size={24} 
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)} 
      />

      <FlatList data={reviews} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
          <Card>
            <Text style={globalStyles.titleText}>{ item.title }</Text>
          </Card>
        </TouchableOpacity>
      )} />
    </View>
  );
}

const styles = StyleSheet.create({
  modalToggle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 50,
    marginBottom: 0,
},
modalContent: {
    flex: 1,
}
});

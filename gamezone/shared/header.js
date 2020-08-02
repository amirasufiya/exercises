import React, { useState } from 'react';
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
// import { Icon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Header({title, navigation}) {

    const openMenu = () => {
        navigation.openDrawer();
    }

    return (
        <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
            <Icon name="dehaze" type="material-icons" size={28} onPress={openMenu} style={styles.icon} />
            <View style={styles.headerTitle}>
                <Image source={require('../assets/heart_logo.png')} style={styles.headerImage}></Image>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    header: {
      width: '100%',
      height: '100%',
      flexDirection: 'row', //main axis
      alignItems: 'center', //column direction
      justifyContent: 'center',
    //   backgroundColor: 'pink',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
      },
    icon: {
        position: 'absolute',
        left: 16,
    },
    headerTitle: {
        flexDirection: 'row',
    },
    headerImage: {
        width: 26,
        height: 26,
        marginHorizontal: 10,
    },
    
});

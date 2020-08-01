import React, { useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';
// import { Icon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Header({navigation}) {

    const openMenu = () => {
        navigation.openDrawer();
    }

    return (
        <View style={styles.header}>
            <Icon name="dehaze" type="material-icons" size={28} onPress={openMenu} style={styles.icon} />
            <View>
                <Text style={styles.headerText}>Game zone</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
      width: '100%',
      height: '100%',
      flexDirection: 'row', //main axis
      alignItems: 'center', //column direction
      justifyContent: 'center',
      backgroundColor: 'pink',
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
    }
});

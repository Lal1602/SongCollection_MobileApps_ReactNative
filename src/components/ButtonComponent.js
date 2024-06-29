import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export const ButtonComponent = (props) => {
  return (
    <View style ={styles.mainButtonContainer}>
        <View style={styles.buttonContainer}>
            <TouchableOpacity {...props}>
                <Text style={styles.textButton}>SEE DETAILS</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
};

const styles = StyleSheet.create({
    mainButtonContainer: {
        alignItems: 'baseline',
        // marginTop: 4
    },
    buttonContainer: {
        marginTop:4,
        borderRadius: 10,
        borderWidth:1,
        alignItems: 'center',
        padding: 8,
        backgroundColor: '#AFCAE8',
        borderColor:'#A6A6BD',
    },
    textButton: {
        color: 'white'
    }
});
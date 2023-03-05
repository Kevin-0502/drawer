import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Image() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Image</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        fontSize:60,
        color: 'green',
        fontWeight: 'bold',
    }
})
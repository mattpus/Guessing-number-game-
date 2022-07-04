import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import  Colors  from '../util/colors'
import Title from '../components/Title'
import PrimaryButton from '../components/PrimaryButton'

export default function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
  return (
    <View style= {styles.container}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source= {require('../assets/images/success.png')}/>
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}> {roundsNumber}</Text> rounds to guess the number 
        <Text style={styles.highlight}> {userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  )
}
const styles = StyleSheet.create({
     container: {
        flex: 1, 
        padding: 24, 
        alignItems: "center", 
        justifyContent: 'center'
     },  
    imageContainer: {
        width: 300, 
        height: 300, 
        borderRadius: 150, 
        borderWidth: 3,
        borderColor: Colors.primary900, 
        overflow: 'hidden', 
        marginTop: 30,
    }, 
    image: {
        height: '100%', 
        width: '100%', 

    },
    summaryText: {
      fontSize: 24, 
      textAlign: 'center', 
      marginBottom: 24, 

    }, 
    highlight: {
      fontWeight: 'bold',
      color: Colors.primary500,

    }
})
import { useState, useEffect } from 'react';
import { View, StyleSheet, Alert, Text, FlatList  } from 'react-native';
import { Ionicons } from "@expo/vector-icons"

import Title from '../components/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/PrimaryButton';
import Card from '../components/Card';
import InstructionText from '../components/InstructionText';
import GuessLogItem from '../components/game/GuessLogItem';

function generateRandomNumber (min, max, exclude) {
  let rndNum = Math.floor(Math.random() * (max-min)) + min;

  if (rndNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1
let maxBoundary = 100

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomNumber(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [ guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber){ 
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);
  useEffect(() => {
    minBoundary= 1;
    maxBoundary = 100;
  },[]);

  function nextGuessHandler(direction) {
    if (( direction === "lower" && currentGuess < userNumber ) || (direction === "greater" && currentGuess > userNumber)){
      Alert.alert("Don't lie!", 'You know that this is wrong...', [ {text: "Sorry!", style: "cancel" }, ])
      return
    }
    if (direction === "lower"){
      maxBoundary = currentGuess; 
      
    } else {
      minBoundary = currentGuess + 1 ;
    }
    const newRndNumber = generateRandomNumber(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRndNumber);
    setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds]);

  }
  const guessRoundsLIstLength = guessRounds.length;
  return (
    <View style={styles.screen}>
      <Title>Opponent's guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card >
        <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
        <View styles= {styles.buttonsContainer}>
          <View styles= {styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
              <Ionicons name='md-remove' size={24} />
              </PrimaryButton>
          </View>
          <View styles= {styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
              <Ionicons name='md-add' size={24}/>
              </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer }>
        <FlatList data={guessRounds} 
        renderItem={(itemData)=> <GuessLogItem roundNumber={guessRoundsLIstLength - itemData.index} guess={itemData.item }  />}
        keyExtractor={({item})=> item}
        />
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24
  },
  instructionText: {
    marginBottom: 16, 
  },
  buttonsContainer: {
    flexDirection: 'row'
  }, 
  buttonContainer:{ 
    flex: 1
  },
  listContainer: {
    flex:1, 
    padding: 16, 

  }
 
});
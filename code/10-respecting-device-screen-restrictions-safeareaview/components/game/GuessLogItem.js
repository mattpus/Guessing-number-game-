import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import Colors    from '../../util/colors'

export default function GuessLogItem({roundNumber, guess}) {
  return (
    <View style={styles.listItem}>
      <Text>#{roundNumber}</Text>
      <Text>Opponent's guess: {guess}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    listItem: {
        borderColor: Colors.primary800, 
        borderWidth: 1, 
        borderRadius: 40, 
        padding: 12, 
        marginVertical: 8,
        backgroundColor: Colors.accent500, 
        flexDirection: 'row', 
        justifyContent:'space-between',
        width: '100%',
        elevation: 4, 

    }
})
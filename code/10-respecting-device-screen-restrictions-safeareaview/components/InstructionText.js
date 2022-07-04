import { Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../util/colors'

export default function InstructionText({children, style}) {
  return (
    <Text style={[styles.instructionText, style]}>{children}</Text>
  )
}
const styles = StyleSheet.create({
    instructionText: {
        color: Colors.accent500, 
        fontSize: 24, 
      },
})
import React from 'react';
import { StyleSheet, View} from 'react-native'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'

const Footer = (props) => {
    return (
      <View style={styles.footer}>
        <View style={styles.footerIcon}>
          <MaterialIcons name='favorite' size={28} color='white' />
          <MaterialIcons name='search' size={28} color='white' />
          <MaterialIcons name='notifications' size={28} color='white' />
          <MaterialCommunityIcons name='information' size={28} color='white' />
        </View>
      </View>
    )
}
      
const styles = StyleSheet.create({
      footer: {
        
          height: 58,
          justifyContent: 'center',
          backgroundColor: '#6200EE',
      },
      footerIcon: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      }
  })

  export default Footer
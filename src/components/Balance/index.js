import React from 'react'
import { View, 
         Text,
         StyleSheet 
} from 'react-native'

import { MotiView } from 'moti'

export default function Balance({saldo, gastos}) {
  return (
    <MotiView style={styles.container}
    from={{
      rotateX:'-100deg',
      opacity:0,

    }}
    animate={{
      rotateX:'0deg',
      opacity:1,
    }}
    transition={{
      type:'timing',
      delay:300,
      duration:900

    }}
    >
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Saldo</Text>
        <View style={styles.boxSymbolBalance}>
            <Text style={styles.currencySymbol}>R$</Text>
            <Text style={styles.balance}>
              {saldo}</Text>
        </View>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemTitle}>Gastos</Text>
        <View style={styles.boxSymbolBalance}>
            <Text style={styles.currencySymbol}>R$</Text>
            <Text style={styles.expenses}>
              {gastos}</Text>
        </View>
      </View>
    </MotiView>
  )
}
const styles = StyleSheet.create({
    container:{
     backgroundColor:'#fff',
     flexDirection:'row',
     justifyContent:'space-between',
     marginStart:14,
     marginEnd: 14,
     marginTop:-25,
     padding:18,
     borderRadius:10,
     zIndex:99
    },
    itemTitle:{
      fontSize:18,
      color:'#AFAEAD',
    },
    boxSymbolBalance:{
      flexDirection:'row',
      alignItems:'center',
      marginTop:5,
    },
    currencySymbol:{
      fontSize:18,
      marginRight:4,
      color:'#AFAEAD'
       
    },
    balance:{
      fontSize:22,
      color:'#2ECC81'
    },
    expenses:{
      fontSize:22,
      color:'#e74c3c'
    }

})
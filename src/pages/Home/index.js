import { View,
     Text, 
     StyleSheet,
    FlatList } from 'react-native'
import Header from '../../components/Header'
import Balance from '../../components/Balance'
import Moviments from '../../components/Moviments'
import Actions from '../../components/Actions'

const list =[
  {
    id: 1,
    label: 'Processador',
    value: '750,00',
    date:'17/09/2022',
    type: 0
  },
  {
    id: 2,
    label: 'Placa mãe',
    value: '850,00',
    date:'18/09/2022',
    type: 0
  },
  {
    id: 3,
    label: 'Mémoria Ram',
    value: '950,00',
    date:'19/09/2022',
    type: 0
  },
  {
    id: 4,
    label: 'Pix cliente',
    value: '550,00',
    date:'22/09/2022',
    type: 1
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
     <Header name="Claubert Vinicius"/>
     <Balance saldo="800.00" gastos="-190.00"/>
     <Actions/>
     <Text style={styles.titleList}>Movimentações recentes</Text>
     <FlatList 
     style={styles.list}
     data={list}
     keyExtractor={(item) => String(item.id)}
     showsVerticalScrollIndicator={false}
     renderItem={({item})=> <Moviments data={item}/>}
     
     />
      
 
    </View>
  )
}
 
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fafafa',
  },
  titleList:{
     fontSize:18,
     fontWeight:'bold',
     marginStart:14,
     marginEnd:14,
     marginTop:20
  },
  list:{
    marginStart:14,
    marginEnd:14
  }
  


})
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';

const list = [
  { id: 1, label: 'Aluguel', value: '1500,00', date: '01/09/22', type: 0 },
  { id: 2, label: 'Salário', value: '7.000,00', date: '05/09/22', type: 1 },
  { id: 4, label: 'Água', value: '115,00', date: '28/09/22', type: 0 },
  { id: 5, label: 'Pix', value: '850,00', date: '05/10/22', type: 0 },
];
export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Vitor Nogueira" />
      <Balance saldo="+R$5690,00" expenses="-R$3478,00" />
      <Text style={styles.title}>Últimas movimentações</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
});

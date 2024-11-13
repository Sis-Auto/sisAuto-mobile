import { ScrollView, View, Text } from 'react-native';
import styles from '../styles/Styles';
import Header from '../components/Header';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <Header />
        <Text style={styles.title}>Visão Geral</Text>
        <View style={styles.cardsContainer}>
          <View style={styles.card}>
            <Text style={styles.cardValue}>20</Text>
            <Text style={styles.cardLabel}>Total de Clientes</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardValue}>20</Text>
            <Text style={styles.cardLabel}>Total de Veículos</Text>
          </View>
        </View>
        <View style={styles.cardsContainer}>
          <View style={styles.card}>
            <Text style={styles.cardValue}>20</Text>
            <Text style={styles.cardLabel}>Total de Orçamentos</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardValue}>20</Text>
            <Text style={styles.cardLabel}>Total de Estoque</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
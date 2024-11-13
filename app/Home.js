import { ScrollView, View, Text } from 'react-native';
import styles from '../styles/Styles';
import Header from '../components/Header';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Text style={styles.title}>Visão Geral</Text>
      </ScrollView>
    </View>
  );
}
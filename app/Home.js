import { useState } from 'react';
import { ScrollView, View, Text, TextInput, Image } from 'react-native';
import styles from '../styles/Styles';
import Header from '../components/Header';
import Menu from '../components/Menu';

export default function HomeScreen() {
  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <Text style={styles.title}>Buscar Veículo</Text>
        <View style={styles.inputContainer}>
          <TextInput
            value={search}
            onChangeText={(text) => setSearch(text.toUpperCase())} // Converte para maiúsculas
            placeholder="AAA12A3"
            style={styles.input}
            maxLength={7}
          />
          <Image source={require('../assets/search.png')} style={styles.car} />
        </View>
        <ScrollView style={styles.cardsContainer}>
          <View style={styles.card}>
            <View style={styles.cardInfo}>
              <Image source={require('../assets/car.png')} style={styles.car} />
              <Image source={require('../assets/plate.png')} style={styles.plate} />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardName}>[Nome do carro]</Text>
              <Text style={styles.cardClientName}>[Nome do cliente]</Text>
              <View style={styles.cardStatus}>
                <Image source={require('../assets/status/started.png')} />
                <Text style={styles.cardStatusName}>Iniciado</Text>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.cardInfo}>
              <Image source={require('../assets/car.png')} style={styles.car} />
              <Image source={require('../assets/plate.png')} style={styles.plate} />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardName}>[Nome do carro]</Text>
              <Text style={styles.cardClientName}>[Nome do cliente]</Text>
              <View style={styles.cardStatus}>
                <Image source={require('../assets/status/started.png')} />
                <Text style={styles.cardStatusName}>Iniciado</Text>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.cardInfo}>
              <Image source={require('../assets/car.png')} style={styles.car} />
              <Image source={require('../assets/plate.png')} style={styles.plate} />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardName}>[Nome do carro]</Text>
              <Text style={styles.cardClientName}>[Nome do cliente]</Text>
              <View style={styles.cardStatus}>
                <Image source={require('../assets/status/started.png')} />
                <Text style={styles.cardStatusName}>Iniciado</Text>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.cardInfo}>
              <Image source={require('../assets/car.png')} style={styles.car} />
              <Image source={require('../assets/plate.png')} style={styles.plate} />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardName}>[Nome do carro]</Text>
              <Text style={styles.cardClientName}>[Nome do cliente]</Text>
              <View style={styles.cardStatus}>
                <Image source={require('../assets/status/started.png')} />
                <Text style={styles.cardStatusName}>Iniciado</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
      <Menu />
    </View>
  );
}
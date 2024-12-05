import { View, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from '../styles/Styles';

export default function Menu() {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={styles.menu}>
        <View style={styles.menuIcons}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image source={require('../assets/menu/home.png')} style={styles.iconMenu}></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../assets/menu/addCar.png')} style={styles.iconMenu}></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../assets/menu/services.png')} style={styles.iconMenu}></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <Image source={require('../assets/menu/settings.png')} style={styles.iconMenu}></Image>
          </TouchableOpacity>
        </View>
    </View>
  );
}
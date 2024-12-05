import { View, Image, Text } from 'react-native';
import styles from '../styles/Styles';

export default function Header() {
  return (
    <View style={styles.header}>
        <Text style={styles.headerLogo}>SisAuto</Text>
        <View style={styles.headerUserInfo}>
          <Image source={require('../assets/userIcon.png')} style={styles.headerUserIcon}/>
        </View>
    </View>
  );
}
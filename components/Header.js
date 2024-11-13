import { View, Image, Text } from 'react-native';
import styles from '../styles/Styles';

export default function Header() {
  return (
    <View style={styles.header}>
        <Image source={require('../assets/images/logo.png')} style={styles.headerLogo}/>
        <View style={styles.headerUserInfo}>
          <Image source={require('../assets/images/userIcon.png')} style={styles.headerUserIcon}/>
          <Image source={require('../assets/images/menuIcon.png')} style={styles.headerMenuIcon}/>
        </View>
    </View>
  );
}
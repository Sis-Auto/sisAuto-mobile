import { useState } from 'react';
import { ScrollView, View, Text, TextInput, Image, TouchableOpacity, Animated, Modal } from 'react-native';
import styles from '../styles/Styles';
import Menu from '../components/Menu';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { text, onChangeText } = useState(null);
  const [progress, setProgress] = useState(new Animated.Value(0));
  const [isPressing, setIsPressing] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handlePressIn = () => {
    setIsPressing(true);
    Animated.timing(progress, {
      toValue: 1,
      duration: 1000, // 1 segundo
      useNativeDriver: false,
    }).start(() => {
      setShowModal(true);
    });
  };
  
  const handlePressOut = () => {
    setIsPressing(false);
    Animated.timing(progress, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleConfirmLogout = () => {
    setShowModal(false);
    navigation.navigate('Home');
  };

  const handleCancelLogout = () => {
    setShowModal(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Configurações</Text>
        <View style={styles.userIconContainer}>
          <Image source={require('../assets/userIcon.png')} style={styles.userIcon}></Image>
        </View>
        <Text style={styles.nameUser}>[Nome do Usuário]</Text>
        <View style={styles.inputContainer}>
        <View style={styles.labelInput}>
          <Image source={require('../assets/form/phone.png')} style={styles.label}></Image>
          <Text style={styles.label}>Telefone</Text>
        </View>
        <TextInput
          onChangeText={onChangeText}
          value={text}
          placeholder="11 11111-1111"
          style={styles.value}
        />
        </View>
        <View style={styles.inputContainer}>
        <View style={styles.labelInput}>
          <Image source={require('../assets/form/email.png')} style={styles.label}></Image>
          <Text style={styles.label}>E-mail</Text>
        </View>
        <TextInput
          onChangeText={onChangeText}
          value={text}
          placeholder="emailusuario@gmail.com"
          style={styles.value}
        />
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.logOut}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={1}
      >
        <Animated.View
          style={[
            styles.logOutProgress,
            {
              width: progress.interpolate({
                inputRange: [0, 1],
                outputRange: ['0%', '110%'],
              }),
            },
          ]}
        />
        <Text style={styles.logOutText}>Desconectar conta</Text>
        <Image source={require('../assets/form/XCircle.png')} />
      </TouchableOpacity>
      <Menu />
      <Modal
        visible={showModal}
        transparent={true}
        animationType="fade"
        onRequestClose={handleCancelLogout}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Confirmação</Text>
            <Text style={styles.modalMessage}>Tem certeza que deseja sair?</Text>
            <View style={styles.modalActions}>
              <TouchableOpacity
                style={[styles.modalButton, styles.confirmButton]}
                onPress={handleConfirmLogout}
              >
                <Text style={styles.buttonText}>Sim</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={handleCancelLogout}
              >
                <Text style={styles.buttonText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
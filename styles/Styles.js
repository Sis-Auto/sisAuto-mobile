import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
/* Estilos Gerais */
  container: {
    flex: 1,
    backgroundColor: '#F7F5F9',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    color: '#696969',
    marginStart: 20,
    marginTop: 10,
    marginBottom: 15,
  },
  /* Estilos para Header */
  header: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    height: 90,
    width: '100%',
    paddingHorizontal: 15,
  },
  headerLogo: {
    color: '#454545',
    fontSize: 30,
    fontWeight: '900',
  },
  headerUserInfo: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerUserIcon: {
    height: 50,
    width: 50,
    marginEnd: 5,
  },
  headerMenuIcon: {
    height: 25,
    width: 25,
  },
  /* Estilos para Menu */
  menu: {
    backgroundColor: '#FF7622',
    paddingVertical: 15,
  },
  menuIcons: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  /* Estilos para Home */
  inputContainer: {
    backgroundColor: '#FFFFFF',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 16,
    fontSize: 19,
    height: 60,
    marginHorizontal: 12,
    marginVertical: 4,
    padding: 10,
  },
  input: {
    borderRadius: 4,
    fontSize: 19,
    height: 45,
  },
  cardsContainer: {
    flexDirection: 'column',
    gap: 20,
    paddingHorizontal: 15,
    display: 'flex',
  },
  card: {
    height: 140,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardInfo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
  },
  cardName: {
    fontSize: 23,
    fontWeight: '600',
    color: '#838383',
  },
  cardClientName: {
    color: '#2D2D2D',
  },
  cardStatus: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  cardStatusName: {
    marginStart: 5,
    fontSize: 14,
  },
  /* Estilos para configurações */
  userIconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  userIcon: {
    height: 150,
    width: 150,
  },
  nameUser: {
    fontSize: 26,
    fontWeight: '500',
    color: '#AAAAAA',
    textAlign: 'center',
    marginBottom: 20,
  },
  labelInput: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  label: {
    fontSize: 18,
    marginEnd: 8,
    color: '#AAAAAA',
  },
  value: {
    borderRadius: 4,
    fontSize: 19,
    height: 45,
    color: '#5A5A5A'
  },
  logOut: {
    backgroundColor: '#ffa8a8',
    borderRadius: 50,
    marginBottom: 15,
    marginHorizontal: 30,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    overflow: 'hidden',
    position: 'relative',
  },
  logOutProgress: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#ff0000',
    zIndex: -1,
  },
  logOutText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
    opacity: 0.7,
    paddingBottom: 4,
    zIndex: 1,
  },
  /* Estilo para o modal de confirmação 
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  confirmButton: {
    backgroundColor: '#ff5c5c',
  },
  cancelButton: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  
});

export default styles;
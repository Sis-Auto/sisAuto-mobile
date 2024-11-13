import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
/* Estilos Gerais */
  container: {
    flex: 1,
    backgroundColor: '#262525',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    color: '#696969',
    marginStart: 20,
  },
  /* Estilos para Header */
  header: {
    backgroundColor: '#1D1D1D',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    height: 100,
    width: '100%',
    paddingTop: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  headerLogo: {
    height: 40,
    width: 160,
  },
  headerUserInfo: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerUserIcon: {
    height: 50,
    width: 50,
    marginEnd: 20,
  },
  headerMenuIcon: {
    height: 25,
    width: 25,
  },
  /* Estilos para Home */
  cardsContainer: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 10,
    paddingHorizontal: 20,
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    height: 90,
    width: 160,
    backgroundColor: '#1D1D1D',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardLabel: {
    color: '#b3b3b3',
  },
  cardValue: {
    fontSize: 36,
    fontWeight: '600',
    color: '#fff',
  },
});

export default styles;
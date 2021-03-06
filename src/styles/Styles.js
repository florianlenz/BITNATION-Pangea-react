import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuButton: {
    position: 'absolute',
    top: 15,
    left: 0,
    flexDirection: 'row',
    flex: 1
  },
  mainMenu: {
    backgroundColor: '#ABABAB',
    top: 30,
  },
  menuItem: {
    marginTop: 10,
    left: 10,
  },
  logo: {
    top: 100,
    left: 0,
    width: 300,
    height: 350,
  },
  home: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

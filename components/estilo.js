import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  
  item: {
    flex: 1, 
    backgroundColor: '#FFE9B1', 
    padding: 20, 
    margin: 1, 
    alignItems: 'center'
  },

  barraSuperior: {
    height: '19%',
    backgroundColor: '#0E9AA6', 
    justifyContent: 'center',
    borderBottomLeftRadius: 20, 
    borderBottomRightRadius: 20, 
    shadowOffset: {width: 0, height: 4},  
    shadowOpacity: 0.2, 
    shadowRadius: 5
  },

  barraSuperior2: {
    height: 142,
    backgroundColor: '#0E9AA6', 
    justifyContent: 'center',
    borderBottomLeftRadius: 20, 
    borderBottomRightRadius: 20, 
    shadowOffset: {width: 0, height: 4},  
    shadowOpacity: 0.2, 
    shadowRadius: 5
  },
  
  barraSuperior3: {
    height: '19%',
    backgroundColor: '#0E9AA6', 
    justifyContent: '',
    borderBottomLeftRadius: 0, 
    borderBottomRightRadius: 0, 
    shadowOffset: {width: 0, height: 4},  
    shadowOpacity: 0.2, 
    shadowRadius: 5
  },

  barraPesquisa: {
    backgroundColor: "#f8f8f8",
    height: 35,
    marginHorizontal: 20,
    marginTop: 24,
    borderBottomWidth: 5,
    borderTopWidth: 5,
    borderLeftWidth: 5.5,
    borderRightWidth: 5.5,
    borderColor: '#C4C4C4',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowOffset: {width: 0, height: 4},  
    shadowOpacity: 0.2, 
    shadowRadius: 3
  },
  
  input: {
    height: 35,
    marginHorizontal: 20,
    marginTop: 24,
    borderWidth: 0.1,
    padding: 10
  }
});
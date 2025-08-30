import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.calculadora}>
        <View style={styles.tela}>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  calculadora: {
    width: '90%',
    heigth: '90%',
  },
  tela: {
    width: '90%',
    heigth 
  }
  botao: {
    
  }
);

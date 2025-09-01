import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [expressao, setExpressao] = useState('');
  const resultado = () => {
    setExpressao(eval(expressao))
  };

  return (
    <View style={styles.container}>
      <View style={styles.calculadora}>
        <View style={styles.tela}>
          <Text style={styles.fontes}>{expressao}</Text>
        </View>
        <View style={styles.linha}>
          <Pressable onPress = {() => setExpressao(expressao + '1')} style={styles.botao}>
            <Text style={styles.fontes}>1</Text>
          </Pressable>
          <Pressable onPress = {() => setExpressao(expressao + '2')} style={styles.botao}>
            <Text style={styles.fontes}>2</Text>
          </Pressable>
          <Pressable onPress = {() => setExpressao(expressao + '3')} style={styles.botao}>
            <Text style={styles.fontes}>3</Text>
          </Pressable>
          <Pressable onPress = {() => setExpressao(expressao + ' + ')} style={styles.botao}>
            <Text style={styles.fontes}>+</Text>
          </Pressable>
        </View>
        <View style={styles.linha}>
          <Pressable onPress = {() => setExpressao(expressao + '4')} style={styles.botao}>
            <Text style={styles.fontes}>4</Text>
          </Pressable>
          <Pressable onPress = {() => setExpressao(expressao + '5')} style={styles.botao}>
            <Text style={styles.fontes}>5</Text>
          </Pressable>
          <Pressable onPress = {() => setExpressao(expressao + '6')} style={styles.botao}>
            <Text style={styles.fontes}>6</Text>
          </Pressable>
          <Pressable onPress = {() => setExpressao(expressao + ' - ')} style={styles.botao}>
            <Text style={styles.fontes}>-</Text>
          </Pressable>
        </View>
        <View style={styles.linha}>
          <Pressable onPress = {() => setExpressao(expressao + '7')} style={styles.botao}>
            <Text style={styles.fontes}>7</Text>
          </Pressable>
          <Pressable onPress = {() => setExpressao(expressao + '8')} style={styles.botao}>
            <Text style={styles.fontes}>8</Text>
          </Pressable>
          <Pressable onPress = {() => setExpressao(expressao + '9')} style={styles.botao}>
            <Text style={styles.fontes}>9</Text>
          </Pressable>
          <Pressable onPress = {() => setExpressao(expressao + '/')} style={styles.botao}>
            <Text style={styles.fontes}>÷</Text>
          </Pressable>
        </View>
        <View style={styles.linha}>
          <Pressable onPress = {() => setExpressao('')} style={styles.botao}>
            <Text style={styles.fontes}>C</Text>
          </Pressable>
          <Pressable onPress = {() => setExpressao(expressao + '0')} style={[styles.botao]}>
            <Text style={styles.fontes}>0</Text>
          </Pressable>
          <Pressable onPress = {() => resultado()} style={styles.botao}>
            <Text style={styles.fontes}>=</Text>
          </Pressable>
          <Pressable onPress = {() => setExpressao(expressao + '*')} style={styles.botao}>
            <Text style={styles.fontes}>×</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000ff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  calculadora: {
    backgroundColor: '#3a3a3aff',
    width: '90%',
    height: '90%',
    padding: 15,
    borderWidth: 5,
    borderColor: '#5e5e5eff',
    borderRadius: 50,
  },
  tela: {
    backgroundColor: '#0f0f0fff',
    borderColor: '#5e5e5eff',
    borderRadius: 40,
    width: '100%',
    height: '28%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 10
  },
  botao: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
    borderColor: '#5e5e5eff',
    borderRadius: 25,
    width: '25%',
    height: '100%',
    backgroundColor: '#5e5e5eff',
    margin: 2,
  },
  linha: {
    flexDirection: 'row',
    height: '18%',
    width: '100%',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fonteTela: {
    color: '#ffffff',
    fontSize: 80,
  },
  fontes: {
    color: '#ffffff',
    fontSize: 75,
  },
});

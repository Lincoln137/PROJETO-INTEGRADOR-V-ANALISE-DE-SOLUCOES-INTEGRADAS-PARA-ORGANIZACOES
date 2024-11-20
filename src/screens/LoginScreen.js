import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('./src/assets/Logos/logo 4.png')} 
        style={styles.logo}
      />
      <Text style={styles.appName}>De férias.app</Text>

      {/* Formulário de Login */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="E-mail"
          style={styles.input}
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Senha"
          style={styles.input}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </View>

      {/* Link de Registro */}
      <Text style={styles.registerText}>
        Não tenho conta.{' '}
        <Text style={styles.registerLink}>Criar conta agora.</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 100, // Ajuste conforme necessário
    height: 100,
    resizeMode: 'contain',
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 24,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  button: {
    backgroundColor: '#D9D0BF', // Cor do botão
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#006400', // Cor do texto do botão
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerText: {
    marginTop: 16,
    fontSize: 14,
    color: '#808080',
  },
  registerLink: {
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;

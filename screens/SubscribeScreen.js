import React, { useState } from 'react';
import { View, Image, Text, TextInput, Pressable, StyleSheet, Alert, Platform } from 'react-native';
import { validateEmail } from '../utils';

const SubscribeScreen = () => {
  const [email, setEmail] = useState('');

  const isEmailValid = validateEmail(email);

  const handleSubscribe = () => {
    if (Platform.OS === 'web') {
      alert("Thanks for subscribing, stay tuned!");
    } else {
      Alert.alert("Thanks for subscribing, stay tuned!");
    }
    setEmail('');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/little-lemon-logo-grey.png')}
        style={styles.logo}
      />
      <Text style={styles.infoText}>
        Subscribe to our newsletter for our latest delicious recipes!
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Type your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        clearButtonMode="always"
      />
      <Pressable
        style={[styles.button, !isEmailValid && styles.disabledButton]}
        onPress={handleSubscribe}
        disabled={!isEmailValid}
      >
        <Text style={styles.buttonText}>Subscribe</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 24,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginTop: 20,
    marginBottom: 20,
  },
  infoText: {
    fontSize: 18,
    color: '#333333',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 24,
    paddingHorizontal: 10,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#333333',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#495E57',
    paddingVertical: 12,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#BDC3C7',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SubscribeScreen;

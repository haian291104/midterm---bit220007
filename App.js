import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('onboarding');

  const OnboardingScreen = () => (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('./assets/image1.jpg')}
        style={styles.backgroundImage}
      />
      <View style={styles.overlay}>
        <Text style={styles.welcomeText}>Welcome</Text>
        <Text style={styles.subText}>to our store</Text>
        <Text style={styles.subtitle}>Get your groceries in as fast as one hour</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setCurrentScreen('signin')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );

  const SignInScreen = () => (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('./assets/image2.jpg')}
        style={styles.groceryImage}
      />
      <Text style={styles.signInTitle}>Get your groceries with nectar</Text>
      <TouchableOpacity style={styles.socialButton}>
        <Text style={styles.socialButtonText}>Continue with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
        <Text style={styles.socialButtonText}>Continue with Facebook</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );

  return currentScreen === 'onboarding' ? <OnboardingScreen /> : <SignInScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
  },
    backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  subText: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    fontStyle:'Gilroy',
  },
  subtitle: {
    fontSize: 10,
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
    fontStyle:'Gilroy-Medium',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  groceryImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  signInTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  socialButton: {
    backgroundColor: '#4285F4',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 10,
  },
  facebookButton: {
    backgroundColor: '#3b5998',
  },
  socialButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
import React from 'react';
import Container from './components/Container';
import Header from './components/Header';
import Input from './components/Input';
import Image from './components/Image';
import Button from './components/Button';

const Challenge2 = () => (
  <Container>
    <Header>
      Welcome to Gaze'
    </Header>
    <Image 
      source={require('./assets/planet.png')}
      resizeMode="contain"
      style={{ height: 130, marginBottom: 60, marginTop: 60 }}
    />
    <Input
      placeholder="email"
    />
    <Input
      placeholder="password"
      secureTextEntry
    />
    <Button>
      Sign in
    </Button>
  </Container>
);

export default Challenge2;

// import React from 'react';
import { TextInput } from 'react-native';
import { ScreenContainer, Header, Button, Column } from '../components';

const LoginScreen = () => {
  return (
    <ScreenContainer>
      <Header title='booth' subTitle='A catalyst for connection' />
      <Column
        $width='80%'
        $justify='space-between'
        style={{ backgroundColor: 'red', flex: 1 }}
      >
        <Column>
          <TextInput value='hi' />
        </Column>
        <Column>
          <Button>Login</Button>
          <Button>Create Account</Button>
        </Column>
      </Column>
    </ScreenContainer>
  );
};

export default LoginScreen;

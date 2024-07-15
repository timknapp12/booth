import {
  ScreenContainer,
  Header,
  Button,
  Column,
  Input,
  Gap,
} from '../components';

const LoginScreen = () => {
  return (
    <ScreenContainer>
      <Header title='booth' subTitle='A catalyst for connection' />
      <Gap />
      <Column
        $width='80%'
        $justify='space-between'
        $maxWidth='400px'
        style={{ flex: 1 }}
      >
        <Column $gap='16px'>
          <Input label='Email address' value='Email address' />
          <Input label='Password' value='Password' />
          <Input label='Confirm Password' value='Confirm Password' />
          <Input label='Phone number' value='Phone number' />
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

import React from 'react';
import {Container, FormContent, FormWrapper, Icon,  Form, FormH1, FormLabel, FormInput, FormButton , Text} from './SignInElements';

const SignIn = () => {
  return (
      <>
      <Container>
          <FormWrapper>
              <Icon to='/'>RJS Bank</Icon>
              <FormContent>
                  <Form>
                      <FormH1>Sign in to your account</FormH1>
                      <FormLabel htmlFor='for'>Email</FormLabel>
                      <FormInput type='email' required></FormInput>
                      <FormLabel htmlFor='for'>Password</FormLabel>
                      <FormInput type='password' required></FormInput>
                    <FormButton htmlFor='for'>Continue</FormButton>
                      <Text>Forgot password?</Text>
                  </Form>
              </FormContent>
          </FormWrapper>
      </Container>
      
      </>
  );
};

export default SignIn;

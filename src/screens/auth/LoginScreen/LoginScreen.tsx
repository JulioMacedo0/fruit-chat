import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {Button, FormTextInput, Screen, Text} from '@components';
import {AuthScreenProps} from '@routes';

import {loginScreenSchema, LoginScreenSchema} from './LoginScreenSchema';

export function LoginScreen({navigation}: AuthScreenProps<'LoginScreen'>) {
  const {control, formState, handleSubmit} = useForm<LoginScreenSchema>({
    resolver: zodResolver(loginScreenSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    reValidateMode: 'onChange',
  });

  function submitForm(formValues: LoginScreenSchema) {
    console.log(formValues);
  }
  return (
    <Screen scrollabe>
      <Text mb="s10" preset="headingLarge" color="primary">
        Login
      </Text>

      <FormTextInput
        control={control}
        name="email"
        keyboardType="email-address"
        label="E-mail"
        placeholder="Digite seu E-mail"
        returnKeyType="next"
        boxProps={{
          mb: 's12',
        }}
      />
      <FormTextInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        returnKeyType="done"
        boxProps={{
          mb: 's12',
        }}
      />

      <Text preset="paragraphSmall" color="primary" bold>
        Esqueceu a senha?
      </Text>
      <Button
        mt="s56"
        buttonVariant="fill"
        title="Entrar"
        mb="s10"
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
      />

      <Button
        buttonVariant="outline"
        title="Criar conta"
        onPress={() => navigation.navigate('SignUpScreen')}
      />
    </Screen>
  );
}

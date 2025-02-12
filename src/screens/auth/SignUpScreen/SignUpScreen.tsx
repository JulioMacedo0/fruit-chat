import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {Button, FormTextInput, Screen, Text} from '@components';
import {AuthScreenProps} from '@routes';

import {signUpScreenSchema, SignUpScreenSchema} from './SignUpScreenSchema';

export function SignUpScreen({}: AuthScreenProps<'SignUpScreen'>) {
  const {control, formState, handleSubmit} = useForm<SignUpScreenSchema>({
    resolver: zodResolver(signUpScreenSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  });

  function submitForm(formValues: SignUpScreenSchema) {
    console.log(formValues);
  }

  return (
    <Screen canGoBack scrollabe>
      <Text mb="s10" preset="headingLarge" color="primary">
        Registrar
      </Text>
      <FormTextInput
        control={control}
        name="username"
        label="Digite seu usarname"
        placeholder="@"
        boxProps={{mb: 's10'}}
      />
      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu E-mail"
        boxProps={{mb: 's10'}}
      />
      <FormTextInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's20'}}
      />

      <Button
        buttonVariant="fill"
        title="Criar conta"
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
      />
    </Screen>
  );
}

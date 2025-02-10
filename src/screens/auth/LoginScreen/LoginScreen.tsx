import React from 'react';

import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Screen} from '../../../components/Screen/Screen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';
import {useForm} from 'react-hook-form';
import {loginScreenSchema, LoginScreenSchema} from './LoginScreenSchema';

import {zodResolver} from '@hookform/resolvers/zod';
import {FormTextInput} from '../../../components/FormTextInput/FormTextInput';

type LoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'LoginScreen'
>;

export function LoginScreen({navigation}: LoginScreenProps) {
  const {control, formState, handleSubmit} = useForm<LoginScreenSchema>({
    resolver: zodResolver(loginScreenSchema),
    defaultValues: {
      email: '',
      password: '',
    },
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

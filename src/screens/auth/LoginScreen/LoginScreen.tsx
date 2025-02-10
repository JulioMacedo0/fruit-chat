import React from 'react';

import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Screen} from '../../../components/Screen/Screen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';

type LoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'LoginScreen'
>;

export function LoginScreen({navigation}: LoginScreenProps) {
  return (
    <Screen scrollabe>
      <Text mb="s10" preset="headingLarge" color="primary">
        Login
      </Text>

      <TextInput
        keyboardType="email-address"
        label="E-mail"
        placeholder="Digite seu E-mail"
        returnKeyType="next"
      />
      <TextInput
        label="Senha"
        placeholder="Digite sua senha"
        returnKeyType="done"
      />

      <Text mt="s10" preset="paragraphSmall" color="primary" bold>
        Esqueceu a senha?
      </Text>
      <Button mt="s56" buttonVariant="fill" title="Entrar" mb="s10" />
      <Button
        buttonVariant="outline"
        title="Criar conta"
        onPress={() => navigation.navigate('SignUpScreen')}
      />
    </Screen>
  );
}

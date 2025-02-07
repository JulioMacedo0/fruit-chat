import React from 'react';

import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Screen} from '../../../components/Screen/Screen';

export function LoginScreen() {
  return (
    <Screen scrollabe>
      <Text mb="s10" preset="headingLarge">
        Login
      </Text>

      <TextInput label="E-mail" placeholder="Digite seu E-mail" />
      <TextInput label="Senha" placeholder="Digite sua senha" />

      <Text mt="s10" preset="paragraphSmall" color="primary">
        Esqueceu a senha?
      </Text>
      <Button mt="s10" buttonVariant="fill" title="Entrar" mb="s10" />
      <Button buttonVariant="outline" title="Criar conta" />
    </Screen>
  );
}

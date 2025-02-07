import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';

export function SignUpScreen() {
  return (
    <Screen scrollabe>
      <Text mb="s10" preset="headingLarge">
        Register
      </Text>
      <TextInput
        label="Digite seu usarname"
        placeholder="@"
        boxProps={{mb: 's10'}}
      />
      <TextInput
        label="E-mail"
        placeholder="Digite seu E-mail"
        boxProps={{mb: 's10'}}
      />
      <TextInput
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's10'}}
      />

      <Button buttonVariant="fill" title="Criar conta" />
    </Screen>
  );
}

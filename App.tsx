/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Button} from './src/components/Button/Button';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{padding: 20}}>
        <Text preset="headingLarge">Coffe Stack</Text>
        <Text preset="headingLarge">Coffe Stack</Text>
        <Button
          buttonVariant="danger"
          title="Entrar"
          mb="s10"
          loading
          disabled
        />
        <Button
          buttonVariant="outline"
          title="Entrar"
          mb="s10"
          loading
          disabled
        />
        <Button buttonVariant="fill" title="Entrar" loading disabled />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;

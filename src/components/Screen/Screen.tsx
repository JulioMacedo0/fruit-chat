import React, {ReactNode} from 'react';
import {Box} from '../Box/Box';

import {useAppSafeArea} from '../../hooks/useAppSafeArea/UseAppSafeArea';
import {KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import {Icon} from '../Icon/Icon';
import {Text} from '../Text/Text';

interface ScreenProps {
  children: ReactNode;
  canGoBack?: boolean;
  scrollabe?: boolean;
}

export function Screen({scrollabe, canGoBack = false, children}: ScreenProps) {
  const Wrapper = scrollabe ? ScrollView : Box;

  const {top, bottom} = useAppSafeArea();

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Wrapper style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
        <Box
          flex={1}
          paddingHorizontal="s24"
          backgroundColor="background"
          style={{paddingTop: top, paddingBottom: bottom}}>
          {canGoBack && (
            <Box mb="s24" flexDirection="row" alignItems="center">
              <Icon name="ArrowLeft" />

              <Text preset="paragraphMedium" color="primary" semiBold ml="s8">
                Voltar
              </Text>
            </Box>
          )}
          {children}
        </Box>
      </Wrapper>
    </KeyboardAvoidingView>
  );
}

import React, {ReactNode} from 'react';
import {Box, TouchableOpacityBox} from '../Box/Box';

import {useAppSafeArea} from '../../hooks/useAppSafeArea/UseAppSafeArea';
import {KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import {Icon} from '../Icon/Icon';
import {Text} from '../Text/Text';
import {useNavigation} from '@react-navigation/native';

interface ScreenProps {
  children: ReactNode;
  canGoBack?: boolean;
  scrollabe?: boolean;
}

export function Screen({scrollabe, canGoBack = false, children}: ScreenProps) {
  const Wrapper = scrollabe ? ScrollView : Box;
  const navigation = useNavigation();
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
            <TouchableOpacityBox
              activeOpacity={0.7}
              onPress={() => navigation.goBack()}
              mb="s24"
              flexDirection="row"
              alignItems="center">
              <Icon name="ArrowLeft" />

              <Text preset="paragraphMedium" color="primary" semiBold ml="s8">
                Voltar
              </Text>
            </TouchableOpacityBox>
          )}
          {children}
        </Box>
      </Wrapper>
    </KeyboardAvoidingView>
  );
}

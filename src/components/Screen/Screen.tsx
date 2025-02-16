import React, {ReactNode} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleProp,
  ViewStyle,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {useAppSafeArea} from '../../hooks/useAppSafeArea/UseAppSafeArea';
import {useAppTheme} from '../../hooks/useAppTheme/useAppTheme';
import {Box, BoxProps, TouchableOpacityBox} from '../Box/Box';
import {Icon} from '../Icon/Icon';
import {Text} from '../Text/Text';

import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer';

interface ScreenProps {
  children: ReactNode;
  canGoBack?: boolean;
  scrollabe?: boolean;
  boxProps?: BoxProps;
}

export function Screen({
  scrollabe,
  canGoBack = false,
  children,
  boxProps,
}: ScreenProps) {
  const {colors} = useAppTheme();
  const Container = scrollabe ? ScrollViewContainer : ViewContainer;
  const navigation = useNavigation();
  const {top, bottom} = useAppSafeArea();

  const $keyboardAvoidingView: StyleProp<ViewStyle> = {
    flex: 1,
  };

  return (
    <KeyboardAvoidingView
      style={$keyboardAvoidingView}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <Box
          flex={1}
          paddingHorizontal="s14"
          backgroundColor="background"
          {...boxProps}
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
      </Container>
    </KeyboardAvoidingView>
  );
}

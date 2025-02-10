import React, {ReactNode} from 'react';
import {Box, TouchableOpacityBox} from '../Box/Box';

import {useAppSafeArea} from '../../hooks/useAppSafeArea/UseAppSafeArea';
import {
  KeyboardAvoidingView,
  Platform,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {Icon} from '../Icon/Icon';
import {Text} from '../Text/Text';
import {useNavigation} from '@react-navigation/native';
import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer';
import {useAppTheme} from '../../hooks/useAppTheme/useAppTheme';

interface ScreenProps {
  children: ReactNode;
  canGoBack?: boolean;
  scrollabe?: boolean;
}

export function Screen({scrollabe, canGoBack = false, children}: ScreenProps) {
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
      </Container>
    </KeyboardAvoidingView>
  );
}

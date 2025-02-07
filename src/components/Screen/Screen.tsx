import React, {ReactNode} from 'react';
import {Box} from '../Box/Box';

import {useAppSafeArea} from '../../hooks/useAppSafeArea/UseAppSafeArea';
import {KeyboardAvoidingView, Platform, ScrollView} from 'react-native';

interface ScreenProps {
  children: ReactNode;
  scrollabe?: boolean;
}

export function Screen({scrollabe, children}: ScreenProps) {
  const Wrapper = scrollabe ? ScrollView : Box;

  const {top, bottom} = useAppSafeArea();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Wrapper>
        <Box
          paddingHorizontal="s24"
          backgroundColor="background"
          style={{paddingTop: top, paddingBottom: bottom}}>
          {children}
        </Box>
      </Wrapper>
    </KeyboardAvoidingView>
  );
}

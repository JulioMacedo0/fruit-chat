import React from 'react';

import Animated, {FadeInDown} from 'react-native-reanimated';

type AnimatedChatItemProps = {
  index: number;
  children?: React.ReactNode | undefined;
};

export function AnimatedChatItem({index, children}: AnimatedChatItemProps) {
  return (
    <Animated.View
      entering={FadeInDown.delay(index * 100).duration(500)} // Animação de entrada
    >
      {children}
    </Animated.View>
  );
}

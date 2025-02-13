import React from 'react';

import {Message} from '@types';

import {Text} from '@components';

type Props = {
  messages: Message[];
};

export function LastMessage({messages}: Props) {
  const lastIndexMessage = messages.length - 1;
  const lastMensage =
    messages[lastIndexMessage].content.type === 'text'
      ? messages[lastIndexMessage].content.text
      : messages[lastIndexMessage].content.duration;

  return (
    <Text preset="paragraphSmall" color="gray1">
      {lastMensage}
    </Text>
  );
}

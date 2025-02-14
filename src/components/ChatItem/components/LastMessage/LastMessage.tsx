import React from 'react';

import {Message} from '@types';

import {Text} from '@components';
import {user} from '@constants';

type Props = {
  messages: Message[];
};

export function LastMessage({messages}: Props) {
  const lastIndexMessage = messages.length - 1;
  const lastMessage = messages[lastIndexMessage];
  const textMessage =
    messages[lastIndexMessage].content.type === 'text'
      ? messages[lastIndexMessage].content.text
      : messages[lastIndexMessage].content.duration;

  const isIam = lastMessage.from === user.id;

  return (
    <Text preset="paragraphSmall" color="gray1">
      {isIam ? 'Você: ' : ''}
      {textMessage}
    </Text>
  );
}

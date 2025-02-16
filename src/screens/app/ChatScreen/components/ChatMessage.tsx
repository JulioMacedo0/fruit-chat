import React from 'react';

import {Message, TextContent} from '@types';

import {Text} from '@components';

type TextMessageProps = {
  message: Message & {content: TextContent};
};
function ChatTextMessage({message}: TextMessageProps) {
  return <Text>{message.content.text}</Text>;
}

type ChatMessageProps = {
  message: Message;
};

export function ChatMessage({message}: ChatMessageProps) {
  if (message.content.type === 'text') {
    return (
      <ChatTextMessage message={message as Message & {content: TextContent}} />
    );
  } else {
    return <Text>default</Text>;
  }
}

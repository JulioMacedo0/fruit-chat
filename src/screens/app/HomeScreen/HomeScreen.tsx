import React from 'react';
import {FlatList} from 'react-native';

import {HeaderApp} from 'components/HeaderApp/HeaderApp';
import {Chat} from 'Types';

import {user} from 'constants/user.mock';

import {ChatItem, Screen} from '@components';
import {AppTabScreenProps} from '@routes';

const chats: Chat[] = [
  {
    chat_id: 'group-12345',
    type: 'private',
    participants: [
      user,
      {
        id: '+5511988888888',
        name: 'Maria Oliveira',
        profilePicture: 'https://randomuser.me/api/portraits/women/90.jpg',
      },
    ],
    messages: [
      {
        message_id: 'msg-001',
        timestamp: '2025-02-13T12:34:56Z',
        from: user.id,
        content: {
          type: 'text',
          text: 'Olá, tudo bem?',
        },
        status: {
          received: true,
          read: false,
        },
      },
      {
        message_id: 'msg-002',
        timestamp: '2025-02-13T12:35:10Z',
        from: '+5511988888888',
        content: {
          type: 'text',
          text: 'Oi! Tudo ótimo e você?',
        },
        status: {
          received: true,
          read: true,
        },
      },
    ],
  },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  return (
    <Screen>
      <HeaderApp />
      <FlatList renderItem={item => <ChatItem {...item.item} />} data={chats} />
    </Screen>
  );
}

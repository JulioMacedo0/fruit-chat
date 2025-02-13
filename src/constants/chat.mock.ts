import {Chat} from '@types';

import {user} from './user.mock';

export const chats: Chat[] = [
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
  {
    chat_id: 'group-123456',
    type: 'private',
    participants: [
      user,
      {
        id: '+5511988888888',
        name: 'Ted Ukl',
        profilePicture: 'https://randomuser.me/api/portraits/women/90.jpg',
      },
    ],
    messages: [
      {
        message_id: 'msg-001',
        timestamp: '2025-02-13T12:34:56Z',
        from: '+5511988888887',
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
        from: user.id,
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

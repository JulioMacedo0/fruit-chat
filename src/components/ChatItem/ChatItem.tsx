import React from 'react';

import {Chat} from '@types';
import {ProfilePicture} from 'components/ProfilePicture/ProfilePicture';

import {user} from 'constants/user.mock';

import {Box, TouchableOpacityBox} from '@components';

import {AnimatedChatItem} from './Animation/AnimatedChatItem/AnimatedChatItem';
import {LastMessage} from './components/LastMessage/LastMessage';
import {LastMessageDate} from './components/LastMessageDate/LastMessageDate';
import {TitleChat} from './components/TitleChat/TitleChat';
import {UnreadMessagesCount} from './components/UnreadMessagesCount/UnreadMessagesCount';

type ChatItemProps = {
  onPressCallback: (chat: Pick<Chat, 'chat_id'>) => void;
  index: number;
} & Chat;

export function ChatItem({
  messages,
  name,
  type,
  participants,
  groupPicture,
  index,
  chat_id,
  onPressCallback,
}: ChatItemProps) {
  const picture =
    type === 'group'
      ? groupPicture
      : participants.find(participant => participant.id !== user.id)
          ?.profilePicture;

  return (
    <AnimatedChatItem index={index}>
      <TouchableOpacityBox
        activeOpacity={0.5}
        flexDirection="row"
        onPress={() => onPressCallback({chat_id})}>
        <ProfilePicture uri={picture} />
        <Box flex={1} flexDirection="row" justifyContent="space-between">
          <Box>
            <TitleChat participants={participants} type={type} name={name} />
            <LastMessage messages={messages} />
          </Box>
          <Box alignItems="flex-end">
            <LastMessageDate messages={messages} />
            <UnreadMessagesCount messages={messages} />
          </Box>
        </Box>
      </TouchableOpacityBox>
    </AnimatedChatItem>
  );
}

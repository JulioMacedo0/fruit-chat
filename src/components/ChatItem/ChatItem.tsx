import React from 'react';

import {Chat, Participant} from '@types';
import {ProfilePicture} from 'components/ProfilePicture/ProfilePicture';

import {user} from 'constants/user.mock';

import {Box, TouchableOpacityBox} from '@components';

import {AnimatedChatItem} from './Animation/AnimatedChatItem/AnimatedChatItem';
import {LastMessage} from './components/LastMessage/LastMessage';
import {LastMessageDate} from './components/LastMessageDate/LastMessageDate';
import {TitleChat} from './components/TitleChat/TitleChat';
import {UnreadMessagesCount} from './components/UnreadMessagesCount/UnreadMessagesCount';

type ChatItemProps = {
  onPressCallback: (participant: Participant) => void;
  index: number;
} & Chat;

export function ChatItem({
  messages,
  name,
  type,
  participants,
  groupPicture,
  index,
  onPressCallback,
}: ChatItemProps) {
  const picture =
    type === 'group'
      ? groupPicture
      : participants.find(participant => participant.id !== user.id)
          ?.profilePicture;

  const participant = participants.find(
    participantItem => participantItem.id !== user.id,
  );

  return (
    <AnimatedChatItem index={index}>
      <TouchableOpacityBox
        activeOpacity={0.5}
        flexDirection="row"
        onPress={() =>
          participant?.id
            ? onPressCallback(participant)
            : console.log('Chat indisponivel')
        }>
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

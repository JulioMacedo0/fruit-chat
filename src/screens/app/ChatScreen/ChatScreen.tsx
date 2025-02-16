import React from 'react';
import {FlatList} from 'react-native';

import {ProfilePicture} from 'components/ProfilePicture/ProfilePicture';

import {Box, Icon, Screen, Text} from '@components';
import {chats, user} from '@constants';
import {AppScreenProps} from '@routes';

import {ChatMessage} from './components/ChatMessage';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ChatScreen({navigation, route}: AppScreenProps<'ChatScreen'>) {
  const {chat} = route.params;

  const chatPartner = chats.find(chatItem => chat.chat_id === chatItem.chat_id);
  const userPartner = chatPartner?.participants.find(
    participant => participant.id !== user.id,
  );
  const messages = chatPartner?.messages;

  return (
    <Screen boxProps={{paddingHorizontal: 's0'}}>
      <Box
        paddingLeft="s4"
        paddingRight="s12"
        pb="s4"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <Box flexDirection="row" alignItems="center" gap="s4">
          <Icon name="ArrowLeft" />
          <ProfilePicture uri={userPartner?.profilePicture} />
          <Text>{userPartner?.name}</Text>
        </Box>

        <Box mb="s10" flexDirection="row" justifyContent="space-between">
          <Box flexDirection="row" gap="s8">
            <Icon name="Camera" />
            <Icon name="EllipsisVertical" />
          </Box>
        </Box>
      </Box>
      <FlatList
        style={{backgroundColor: 'red'}}
        data={messages}
        renderItem={({item}) => <ChatMessage message={item} />}
        keyExtractor={item => item.message_id}
      />
    </Screen>
  );
}

import React from 'react';
import {FlatList} from 'react-native';

import {Participant} from '@types';

import {ChatItem, HeaderApp, ItemSeparator, Screen} from '@components';
import {chats} from '@constants';
import {AppTabScreenProps} from '@routes';

export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  function NavigateToUserChat(participant: Pick<Participant, 'id'>) {
    navigation.navigate('ChatScreen', {participant});
  }
  return (
    <Screen>
      <HeaderApp
        title="Fruit Chat"
        textProps={{preset: 'headingLarge', color: 'primary'}}
      />
      <FlatList
        keyExtractor={item => item.chat_id}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={item => (
          <ChatItem {...item.item} onPressCallback={NavigateToUserChat} />
        )}
        data={chats}
      />
    </Screen>
  );
}

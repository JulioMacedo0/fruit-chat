import React from 'react';
import {FlatList} from 'react-native';

import {Chat} from '@types';

import {ChatItem, HeaderApp, ItemSeparator, Screen} from '@components';
import {chats} from '@constants';
import {AppTabScreenProps} from '@routes';

export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  function NavigateToUserChat(chat: Pick<Chat, 'chat_id'>) {
    navigation.navigate('ChatScreen', {chat});
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
          <ChatItem
            index={item.index}
            {...item.item}
            onPressCallback={NavigateToUserChat}
          />
        )}
        data={chats}
      />
    </Screen>
  );
}

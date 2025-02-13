import React from 'react';
import {FlatList} from 'react-native';

import {HeaderApp} from 'components/HeaderApp/HeaderApp';

import {ChatItem, ItemSeparator, Screen} from '@components';
import {chats} from '@constants';
import {AppTabScreenProps} from '@routes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  return (
    <Screen>
      <HeaderApp />
      <FlatList
        ItemSeparatorComponent={ItemSeparator}
        renderItem={item => <ChatItem {...item.item} />}
        data={chats}
      />
    </Screen>
  );
}

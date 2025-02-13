import React from 'react';

import {Chat} from '@types';

import {user} from 'constants/user.mock';

import {Text} from '@components';

type Props = {} & Pick<Chat, 'name' | 'type' | 'participants'>;

export function TitleChat({participants, type, name}: Props) {
  const titleChat =
    type === 'group'
      ? name
      : participants.find(participant => participant.id !== user.id)?.name;
  return <Text color="primary">{titleChat}</Text>;
}

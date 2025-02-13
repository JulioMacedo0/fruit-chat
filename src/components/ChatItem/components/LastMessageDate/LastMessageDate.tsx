import React from 'react';

import {Message} from '@types';
import {format, isToday, isYesterday} from 'date-fns';
import {ptBR} from 'date-fns/locale';

import {Text} from '@components';

type Props = {
  messages: Message[];
};

export function LastMessageDate({messages}: Props) {
  const lastMessageTimestamp = messages[messages.length - 1]?.timestamp;
  let formattedDate = '';
  if (lastMessageTimestamp) {
    const messageDate = new Date(lastMessageTimestamp);

    formattedDate = isToday(messageDate)
      ? format(messageDate, 'HH:mm', {locale: ptBR})
      : isYesterday(messageDate)
      ? 'Ontem'
      : format(messageDate, 'dd/MM/yyyy', {locale: ptBR});
  }
  return (
    <Text color="primary" preset="paragraphCaption" bold>
      {formattedDate}
    </Text>
  );
}

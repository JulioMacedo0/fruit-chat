import {Participant} from '@types';

export function generateChatId(participants: Participant[]): string {
  const sortedIds = participants.map(p => p.id.replace('+', '')).sort();
  return `chat-${sortedIds.join('-')}`;
}

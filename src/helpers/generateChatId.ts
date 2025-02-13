import {Participant} from 'Types';

export function generateChatId(participants: Participant[]): string {
  const sortedIds = participants.map(p => p.id.replace('+', '')).sort();
  return `chat-${sortedIds.join('-')}`;
}

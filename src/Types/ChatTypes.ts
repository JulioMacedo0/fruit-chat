// types/chatTypes.ts

export type TextContent = {
  type: 'text';
  text: string;
};

export type MediaContent = {
  type: 'photo' | 'video' | 'audio';
  mediaUrl: string;
  caption?: string;
  duration?: number;
};

export type MessageContent = TextContent | MediaContent;

export type MessageStatus = {
  received: boolean;
  read: boolean;
};

export type Message = {
  message_id: string;
  timestamp: string;
  from: string;
  to: string;
  content: MessageContent;
  status: MessageStatus;
};

export type Participant = {
  id: string;
  name: string;
};

export type Chat = {
  chat_id: string;
  type: 'private' | 'group';
  name: string;
  participants: Participant[];
  messages: Message[];
};

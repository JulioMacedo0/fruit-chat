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
  content: MessageContent;
  status: MessageStatus;
};

export type Participant = {
  id: string;
  name: string;
  profilePicture: string;
};

type BaseChat = {
  chat_id: string;
  name?: string;
  groupPicture?: string;
  participants: Participant[];
  messages: Message[];
};

export type ChatPrivate = BaseChat & {
  type: 'private';
};

export type ChatGroup = BaseChat & {
  type: 'group';
  admins: Participant[];
};

export type Chat = ChatPrivate | ChatGroup;

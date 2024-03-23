import dynamic from 'next/dynamic';

const componentsToImport = [
  'ChatEngine',
  'ChatList',
  'ChatCard',
  'NewChatForm',
  'ChatFeed',
  'ChatHeader',
  'IceBreaker',
  'MessageBubble',
  'IsTyping',
  'ConnectionBar',
  'NewMessageForm',
  'ChatSettings',
  'ChatSettingsTop',
  'PeopleSettings',
  'PhotosSettings',
  'OptionsSettings',
];

const dynamicImports = componentsToImport.reduce((acc, componentName) => {
  acc[componentName] = dynamic(() =>
    import('react-chat-engine').then((module) => module[componentName])
  );
  return acc;
}, {});

const {
  ChatEngine,
  ChatList,
  ChatCard,
  NewChatForm,
  ChatFeed,
  ChatHeader,
  IceBreaker,
  MessageBubble,
  IsTyping,
  ConnectionBar,
  NewMessageForm,
  ChatSettings,
  ChatSettingsTop,
  PeopleSettings,
  PhotosSettings,
  OptionsSettings,
} = dynamicImports;

export {
  ChatEngine,
  ChatList,
  ChatCard,
  NewChatForm,
  ChatFeed,
  ChatHeader,
  IceBreaker,
  MessageBubble,
  IsTyping,
  ConnectionBar,
  NewMessageForm,
  ChatSettings,
  ChatSettingsTop,
  PeopleSettings,
  PhotosSettings,
  OptionsSettings,
};
import { ChatCardProps, ChatObject } from 'react-chat-engine-advanced';
interface CustomChatCardProps extends ChatCardProps {
    username: string;
    isActive: boolean;
    onChatCardClick: (chatId: number) => void;
    chat?: ChatObject;
}
declare const CustomChatCard: (props: CustomChatCardProps) => JSX.Element;
export default CustomChatCard;
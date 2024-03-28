import { MultiChatWindowProps } from 'react-chat-engine-advanced';
interface PrettyChatWindowProps extends MultiChatWindowProps {
    projectId: string;
    username: string;
    secret: string;
    httpUrl?: string;
    height?: string;
}
export declare const PrettyChatWindow: (props: PrettyChatWindowProps) => JSX.Element;
export {};

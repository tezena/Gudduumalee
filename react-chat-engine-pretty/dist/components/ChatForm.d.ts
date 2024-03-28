export interface OptionType {
    value: string;
    label: string;
}
interface ChatFormProps {
    projectId: string;
    username: string;
    secret: string;
    onChange: (users: OptionType[]) => void;
    onCancel: () => void;
}
declare const ChatForm: (props: ChatFormProps) => JSX.Element;
export default ChatForm;

import {
  ChatBox,
  ContentGroupChat,
  HeaderGroupChat,
  LayoutGroupChatResize,
} from "../../components/GroupChat";

export default function GroupChatPage() {
  return (
    <LayoutGroupChatResize Header={<HeaderGroupChat />} ChatBox={<ChatBox />}>
      <ContentGroupChat />
    </LayoutGroupChatResize>
  );
}

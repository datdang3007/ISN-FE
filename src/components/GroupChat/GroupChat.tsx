import { HeaderGroupChat } from "./components/HeaderGroupChat";
import { ContentGroupChat } from "./components/ContentGroupChat";
import { ChatBox } from "./components/ChatBox";
import { LayoutGroupChatResize } from "./components/LayoutGroupChatResize";

export const GroupChat = () => {
  return (
    <LayoutGroupChatResize Header={<HeaderGroupChat />} ChatBox={<ChatBox />}>
      <ContentGroupChat />
    </LayoutGroupChatResize>
  );
};

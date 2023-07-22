import { createBrowserRouter } from "react-router-dom";
import { PATH } from "./path";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { MainLayout } from "../layouts/MainLayout";
import { ChannelLayout } from "../layouts/ChannelLayout";
import { GroupLayout } from "../layouts/GroupLayout";
import GroupChatPage from "../pages/GroupChat";
import { MeetingPage } from "../pages/Meeting";
import { MeetingRoom } from "../components/MeetingRoom";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        element: <ChannelLayout />,
        children: [
          {
            element: <GroupLayout />,
            children: [
              {
                path: PATH.GROUP_CHAT,
                element: <GroupChatPage />,
              },
              {
                path: PATH.MEETING,
                element: <MeetingPage />,
              },
              {
                path: PATH.MEETING_ROOM,
                element: <MeetingRoom />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: PATH.LOGIN,
    element: <Login />,
  },
  {
    path: PATH.REGISTER,
    element: <Register />,
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import { PATH } from "./path";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { MainLayout } from "../layouts/MainLayout";
import { ChannelLayout } from "../layouts/ChannelLayout";
import { GroupChat } from "../components/GroupChat";
import { GroupLayout } from "../layouts/GroupLayout";

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
                element: <GroupChat />,
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

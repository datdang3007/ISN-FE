import { useCallback, useEffect, useRef, useState } from "react";
import { getUrlSearchParams } from "../../utils/common";
import { Grid, Typography } from "@mui/material";
import Peer from "peerjs";
import { socket } from "../..";

const peer = new Peer({
  secure: true,
  host: "isn-server-063f59ef0ea2.herokuapp.com",
  port: 443,
  path: "/peerjs",
  config: {
    iceServers: [
      { url: "stun:stun01.sipphone.com" },
      { url: "stun:stun.ekiga.net" },
      { url: "stun:stunserver.org" },
      { url: "stun:stun.softjoys.com" },
      { url: "stun:stun.voiparound.com" },
      { url: "stun:stun.voipbuster.com" },
      { url: "stun:stun.voipstunt.com" },
      { url: "stun:stun.voxgratia.org" },
      { url: "stun:stun.xten.com" },
      {
        url: "turn:192.158.29.39:3478?transport=udp",
        credential: "JZEOEt2V3Qb0y27GRntt2u2PAYA=",
        username: "28224511:1379330808",
      },
      {
        url: "turn:192.158.29.39:3478?transport=tcp",
        credential: "JZEOEt2V3Qb0y27GRntt2u2PAYA=",
        username: "28224511:1379330808",
      },
    ],
  },
  debug: 3,
});

export function MeetingRoom() {
  const myUserVideo = useRef<HTMLVideoElement>(null);
  const listUserVideoStreamDiv = useRef<HTMLDivElement>(null);
  const [myStream, setMyStream] = useState<MediaStream>();
  const meetingCode = getUrlSearchParams("meeting_code");

  const addVideoStream = useCallback((video: any, stream: any) => {
    video.srcObject = stream;
    video.addEventListener("loadedmetadata", () => {
      video.play();
    });
  }, []);

  const addElementToList = (element: HTMLElement, userID: string) => {
    if (listUserVideoStreamDiv.current) {
      const isExist = Array.from(
        listUserVideoStreamDiv.current.children
      ).filter((val) => val.getAttribute("id") === userID);
      if (isExist.length === 0) {
        listUserVideoStreamDiv.current.appendChild(element);
      }
    }
  };

  const connectToNewUser = useCallback(
    (userID: any, stream: any) => {
      console.log("I call someone:", userID);
      const call = peer.call(userID, stream);
      const newUserStreamConnected = document.createElement("video");
      newUserStreamConnected.setAttribute("id", userID);
      newUserStreamConnected.setAttribute("playsinline", "");
      newUserStreamConnected.setAttribute("muted", "");
      newUserStreamConnected.setAttribute("autoplay", "");
      call.on("stream", (userVideoStream: MediaStream) => {
        addVideoStream(newUserStreamConnected, userVideoStream);
        addElementToList(newUserStreamConnected, userID);
      });
    },
    [addVideoStream]
  );

  useEffect(() => {
    const navigatorFunction = (stream: MediaStream) => {
      setMyStream(stream);
      addVideoStream(myUserVideo.current, stream);

      peer.on("call", (call) => {
        call.answer(stream);
        const newUserStreamConnected = document.createElement("video");
        newUserStreamConnected.setAttribute("id", call.peer);
        newUserStreamConnected.setAttribute("playsinline", "");
        newUserStreamConnected.setAttribute("muted", "");
        newUserStreamConnected.setAttribute("autoplay", "");
        call.on("stream", (userVideoStream: MediaStream) => {
          addVideoStream(newUserStreamConnected, userVideoStream);
          addElementToList(newUserStreamConnected, call.peer);
        });
      });

      socket.on("user-connected", (userId) => {
        connectToNewUser(userId, stream);
      });
    };

    peer.on("open", (id) => {
      console.log("my id is:", id);
      socket.emit("join-room", meetingCode, id);
    });

    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then(navigatorFunction);

    return () => {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then(navigatorFunction);
    };
  }, [addVideoStream, connectToNewUser, meetingCode]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="tB16">Meeting Room: {meetingCode}</Typography>
      </Grid>
      <Grid item xs={12}>
        {myStream ? (
          <>
            <p>connected stream</p>
          </>
        ) : (
          <>
            <p>connected stream fail</p>
          </>
        )}
        <video playsInline muted ref={myUserVideo} autoPlay width={200} />
      </Grid>
      <Grid item xs={12}>
        <div ref={listUserVideoStreamDiv}></div>
      </Grid>
    </Grid>
  );
}

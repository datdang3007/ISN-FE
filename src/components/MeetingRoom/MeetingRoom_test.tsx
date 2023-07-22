// import { useCallback, useEffect, useRef, useState } from "react";
// import { socket } from "../..";
// import { getUrlSearchParams } from "../../utils/common";
// import { Grid, Typography } from "@mui/material";
// import Peer from "simple-peer";

// export function MeetingRoom() {
//   const myUserVideo = useRef<HTMLVideoElement>(null);
//   const [myUserID, setMyUserID] = useState<string>();
//   const [myStream, setMyStream] = useState<MediaStream>();
//   const meetingCode = getUrlSearchParams("meeting_code");
//   const anotherPeopleVideo = useRef<HTMLVideoElement>(null);

//   // My Connection:
//   const InitConnect = useCallback(
//     (listSignal: any) => {
//       console.log("connect");

//       const myPeer = new Peer({
//         initiator: true,
//         trickle: false,
//         stream: myStream,
//       });

//       myPeer.on("signal", (data) => {
//         socket.emit("test-call", {
//           signalData: data,
//           from: myUserID,
//           name: "test",
//         });
//       });

//       myPeer.on("stream", (stream) => {
//         if (anotherPeopleVideo.current)
//           anotherPeopleVideo.current.srcObject = stream;
//       });
//       listSignal.forEach((signal: any) => {
//         console.log(signal);
//         // myPeer.signal(signal);
//       });
//     },
//     [myStream, myUserID]
//   );

//   useEffect(() => {
//     navigator.mediaDevices
//       .getUserMedia({ video: false, audio: true })
//       .then((stream) => {
//         setMyStream(stream);
//         if (myUserVideo.current) myUserVideo.current.srcObject = stream;
//       });

//     // FUNCTION:
//     const JoinRoom = () => {
//       socket.emit("join-room", meetingCode);
//       socket.on("user-connected", (listSignal: any) => {
//         if (listSignal) {
//           console.log(listSignal);
//           InitConnect(listSignal);
//         }
//       });
//     };

//     window.addEventListener("load", JoinRoom);
//     return () => {
//       window.removeEventListener("load", JoinRoom);
//     };
//   }, [InitConnect, meetingCode]);

//   // socket.on("callAccepted", (signal) => {
//   //   setCallAccepted(true);
//   //   peer.signal(signal);
//   // });

//   // // Other People Connection:
//   // socket.on("join-meeting", (signal) => {
//   //   myPeer.signal(signal);
//   // });

//   return (
//     <Grid container>
//       <Grid item xs={12}>
//         <Typography variant="tB16">Meeting Room: {meetingCode}</Typography>
//       </Grid>
//       <Grid item xs={12}>
//         {myStream && (
//           <>
//             <p>connected stream</p>
//             <video playsInline muted ref={myUserVideo} autoPlay />
//           </>
//         )}
//         <>
//           <p>another stream</p>
//           <video playsInline muted ref={anotherPeopleVideo} autoPlay />
//         </>
//       </Grid>
//     </Grid>
//   );
// }

import { useCallback, useEffect, useRef, useState } from "react";
import { socket } from "../..";
import { getUrlSearchParams } from "../../utils/common";
import { Grid, Typography } from "@mui/material";
import Peer from "simple-peer";

export function MeetingRoom() {
  const myUserVideo = useRef<HTMLVideoElement>(null);
  const [myUserID, setMyUserID] = useState<string>();
  const [myStream, setMyStream] = useState<MediaStream>();
  const meetingCode = getUrlSearchParams("meeting_code");
  const anotherPeopleVideo = useRef<HTMLVideoElement>(null);

  // My Connection:
  const InitConnect = useCallback(
    (listSignal: any) => {
      console.log("connect");

      const myPeer = new Peer({
        initiator: true,
        trickle: false,
        stream: myStream,
      });

      // myPeer.on("signal", (data) => {
      //   socket.emit("test-call", {
      //     signalData: data,
      //     from: myUserID,
      //     name: "test",
      //   });
      // });

      // myPeer.on("stream", (stream) => {
      //   if (anotherPeopleVideo.current)
      //     anotherPeopleVideo.current.srcObject = stream;
      // });

      listSignal.forEach((signal: any) => {
        myPeer.signal(signal);
      });
    },
    [myStream, myUserID]
  );

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      setMyStream(stream);
      if (myUserVideo.current) myUserVideo.current.srcObject = stream;
    });

    // FUNCTION:
    const JoinRoom = () => {
      socket.emit("join-room", meetingCode);
      socket.on("user-connected", (listSignal: any) => {
        if (listSignal) {
          console.log(listSignal);
          InitConnect(listSignal);
        }
      });
    };

    window.addEventListener("load", JoinRoom);
    return () => {
      window.removeEventListener("load", JoinRoom);
    };
  }, [InitConnect, meetingCode]); // Fix: Include socket in the dependency array

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="tB16">Meeting Room: {meetingCode}</Typography>
      </Grid>
      <Grid item xs={12}>
        {myStream && (
          <>
            <p>connected stream</p>
            <video playsInline muted ref={myUserVideo} autoPlay />
          </>
        )}
        <>
          <p>another stream</p>
          <video playsInline muted ref={anotherPeopleVideo} autoPlay />
        </>
      </Grid>
    </Grid>
  );
}

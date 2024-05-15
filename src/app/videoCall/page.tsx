"use client"
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  MeetingProvider,
  MeetingConsumer,
  useMeeting,
  useParticipant,
} from "@videosdk.live/react-sdk";
import { authToken, createMeeting } from "./api";
import ReactPlayer from "react-player";
import "../globals.css";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import JoinScreen from "./components/joinScreen";
import ParticipantView from "./components/joinScreen"
import Controls from "./components/controls";
import MeetingView from "./components/meetingView";





const VideoCall=()=> {
  const [meetingId, setMeetingId] = useState < string>()

  //Getting the meeting id by calling the api we just wrote
  const getMeetingAndToken = async (id?: string) => {
    console.log("here")
    const meetingId =
      id == null ? await createMeeting({ token: authToken  }) : id;
    setMeetingId(meetingId);
  };

  //This will set Meeting Id to null when meeting is left or ended
  const onMeetingLeave = () => {
    setMeetingId("");
  };

  return authToken && meetingId ? (
    <div className="h-auto flex items-center justify-center px-2">
    <MeetingProvider
      config={{
        meetingId,
        micEnabled: true,
        webcamEnabled: true,
        name: "Guddumalle",
        debugMode:false,
      }}
      token={authToken}
    >
      <MeetingView meetingId={meetingId} onMeetingLeave={onMeetingLeave} />
    </MeetingProvider>
    </div>
  ) : (
    <div className="  px-2 h-full w-full min-h-screen flex justify-center ">
       
    <JoinScreen getMeetingAndToken={getMeetingAndToken}  />
    </div>
   
  )
}

export default VideoCall;


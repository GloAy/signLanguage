import React, { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";
import * as handpose from "@tensorflow-models/handpose";
// import thumbsup from "./thumbsup.png";
// import victory from "./victory.png";
import * as fp from "fingerpose";
import * as tf from "@tensorflow/tfjs";
import { rockGesture } from "./rockGesture";

export default function Visual() {
  let loadHandModel;
  const webcamRef = useRef(null);

  const [emoji, setEmoji] = useState(null); //access our gesture statate and set that state using setEmoji

  const loadHandpose = async () => {
    loadHandModel = await handpose.load();
    console.log("Handpose model loaded.");
    //  Loop and detect hands
    setInterval(() => {
      detect(loadHandModel);
    }, 100);
  };

  const detect = async (loadHandModel) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      const hand = await loadHandModel.estimateHands(video);
      //console.log("hand", hand);

      //gesture detection
      if (hand.length > 0) {
        const GE = new fp.GestureEstimator([
          fp.Gestures.VictoryGesture,
          fp.Gestures.ThumbsUpGesture,
          rockGesture,
        ]);

        //console.log("this is the rock", rockGesture);
        //console.log("this is the victory one", fp.Gestures.VictoryGesture);

        //estimate our gestures
        //passing in minimum confidence detector
        const gesture = await GE.estimate(hand[0].landmarks, 8);
        //console.log(gesture);
        if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
          const confidence = gesture.gestures.map(
            (prediction) => prediction.confidence
          );
          console.log("this is the gestures", gesture.gestures);
          const maxConfidence = confidence.indexOf(
            Math.max.apply(null, confidence)
          );
          console.log("name", gesture.gestures[maxConfidence].name);
          setEmoji(gesture.gestures[maxConfidence].name);
        }
      }
    }
  };

  useEffect(() => {
    async function test() {
      await loadHandpose();
      await detect();
    }
    test();
  }, []);

  console.log("emoji", emoji);
  return (
    <div>
      {/* <h1>{emoji}</h1> */}

      {emoji && emoji === "thumbs_up" && (
        <div>
          <img src="/thumbsup.png" height="100" width="100" />
        </div>
      )}
      {emoji && emoji === "victory" && (
        <div>
          <img src="/victory.png" height="120" width="100" />
        </div>
      )}
      {emoji && emoji === "rockGesture" && (
        <div>
          <img src="/rock.png" height="120" width="100" />
        </div>
      )}
      <Webcam
        ref={webcamRef}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zindex: 9,
          width: 640,
          height: 480,
        }}
      />
    </div>
  );
}

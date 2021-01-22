import React, { useRef } from 'react';
import Webcam from 'react-webcam';
import * as handpose from '@tensorflow-models/handpose';

export default function Visual() {
  const webcamRef = useRef(null);

  const loadHandpose = async () => {
    const loadHandModel = await handpose.load();
    console.log('Handpose model loaded.');
    //  Loop and detect hands
    setInterval(() => {
      detect(loadHandModel);
    }, 100);
  };

  const detect = async net => {
    if (
      typeof webcamRef.current !== 'undefined' &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      const hand = await net.estimateHands(video);
      console.log(hand);
    }
  };

  loadHandpose();
  detect();
  return (
    <div>
      <Webcam
        ref={webcamRef}
        style={{
          position: 'absolute',
          marginLeft: 'auto',
          marginRight: 'auto',
          left: 0,
          right: 0,
          textAlign: 'center',
          zindex: 9,
          width: 640,
          height: 480,
        }}
      />
    </div>
  );
}

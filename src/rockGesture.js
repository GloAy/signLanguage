import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

export const rockGesture = new GestureDescription("rockGesture");

//Thumb
rockGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
rockGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.8);

//Index
rockGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
rockGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.8);
rockGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.8);

//Middle
rockGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
rockGesture.addDirection(Finger.Middle, FingerDirection.VerticalRight, 0.8);
rockGesture.addDirection(Finger.Middle, FingerDirection.VerticalLeft, 0.8);

//Ring
rockGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
rockGesture.addDirection(Finger.Ring, FingerDirection.VerticalRight, 0.8);
rockGesture.addDirection(Finger.Ring, FingerDirection.VerticalLeft, 0.8);

//Pinky
rockGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
rockGesture.addDirection(Finger.Pinky, FingerDirection.VerticalRight, 0.8);
rockGesture.addDirection(Finger.Pinky, FingerDirection.VerticalLeft, 0.8);

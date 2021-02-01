import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

export const loveyouGesture = new GestureDescription("loveyouGesture");

//Thumb
loveyouGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
loveyouGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.5);
loveyouGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.5);

//Index
loveyouGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
loveyouGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.75);
// loveYouGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.5);

//Middle
loveyouGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
loveyouGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.5);
// loveYouGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.5);

//Ring
loveyouGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
loveyouGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.5);
// loveYouGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 0.5);

//Pinky
loveyouGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
loveyouGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.75);

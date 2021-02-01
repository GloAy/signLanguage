import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

export const fingerCrossGesture = new GestureDescription("fingerCrossGesture");

//Thumb
fingerCrossGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
fingerCrossGesture.addDirection(
  Finger.Index,
  FingerDirection.DiagonalUpLeft,
  0.5
);

//Index
fingerCrossGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
fingerCrossGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.5);

//Middle
fingerCrossGesture.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1);
fingerCrossGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.5);

//Ring
fingerCrossGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
fingerCrossGesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.5);

//Pinky
fingerCrossGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
fingerCrossGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.5);

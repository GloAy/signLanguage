import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

export const paperGesture = new GestureDescription("paperGesture");

//thumb
rockGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.75);
rockGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
rockGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  rockGesture.addCurl(finger, FingerCurl.FullCurl, 0.75);
  rockGesture.addDirection(finger, FingerDirection.VerticalDown, 0.25);
  rockGesture.addDirection(finger, FingerDirection.VerticalDown, 1.0);
}

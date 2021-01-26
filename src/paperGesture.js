import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

export const paperGesture = new GestureDescription("paperGesture");

//thumb
// paperGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.75);
// paperGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
// paperGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

for (let finger of [
  Finger.Thumb,
  Finger.Index,
  Finger.Middle,
  Finger.Ring,
  Finger.Pinky,
]) {
  paperGesture.NoCurl(finger, FingerCurl.NoCurl, 0.75);
  paperGesture.addDirection(finger, FingerDirection.VerticalUp, 0.25);
  paperGesture.addDirection(finger, FingerDirection.VerticalUp, 0.25);
}

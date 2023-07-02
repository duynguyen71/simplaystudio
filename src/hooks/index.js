import { isIOS, isMacOs } from "react-device-detect";

export const PUBLIC_IMAGE_URL = process.env.PUBLIC_URL + "/images";
export const PUBLIC_VIDEO_URL = process.env.PUBLIC_URL + "/videos";

export const isAppleProduct = () => {
  return isMacOs || isIOS;
};

export const outLineStrokeStyle = {
  "-webkit-text-stroke": "1px white",
  color: "transparent",
  "-webkit-text-fill-color": "transparent",
};

import { FC } from "react";

const defaultStyle = {
  width: "100%",
  height: "50%",
  objectFit: "contain",
};

interface ISharedImageProps {
  src: string;
  style?: object;
  alt?: string;
}

const SharedImage: FC<ISharedImageProps> = ({
  src,
  style = defaultStyle,
  alt,
}) => {
  return <img src={src} style={style} alt={alt} loading="lazy" />;
};

export default SharedImage;

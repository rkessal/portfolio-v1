import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Image from "next/image";

export default function ProjectItemShowcase({ src, width, height }) {
  const mobile = width < height ? true : false;

  return (
    <div
      className={`px-8 pt-8 overflow-hidden rounded-md max-h-${
        mobile ? "104 lg:max-h-120" : "256 lg:px-24 lg:pt-24"
      } bg-gradient-to-bl from-gray-100 to-gray-200 `}
    >
      <Zoom>
        <Image src={src} layout="responsive" width={width} height={height} />
      </Zoom>
    </div>
  );
}

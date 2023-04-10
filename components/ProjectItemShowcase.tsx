import "react-medium-image-zoom/dist/styles.css";
import Image, { StaticImageData } from "next/image";
import AnimatedImage from "./AnimatedImage";

type Props = {
  src: StaticImageData | string;
  width: number;
  height: number;
  video?: boolean;
  className?: string;
  mobile?: boolean;
};

const ProjectItemShowcase = ({
  src,
  width,
  height,
  video,
  className,
  mobile,
}: Props) => {
  return (
    <div
      className={`px-8 pt-8 overflow-hidden max-h-${
        mobile ? "104 lg:max-h-120" : "256 lg:px-24 lg:pt-24"
      } bg-gradient-to-bl from-gray-100 to-gray-200 `}
    >
      {!video && (
        <AnimatedImage>
          <Image
            src={src}
            layout="responsive"
            width={width}
            height={height}
            alt=""
            className={className}
          />
        </AnimatedImage>
      )}
      {video && (
        <AnimatedImage>
          <video autoPlay muted loop height={height} width={width}>
            <source src={src as any} type="video/mp4" />
            Your browser doesn&apos;t support the video tag.
          </video>
        </AnimatedImage>
      )}
    </div>
  );
};

export default ProjectItemShowcase;

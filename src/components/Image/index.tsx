/*
  This file defines a custom image component that uses the LazyLoadImage component from react-lazy-load-image-component.
  The component takes a src, alt, and className prop and returns an image element with the appropriate attributes and styles.
*/

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const Image = ({ src, alt, className }: ImageProps) => {
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      className={`${className} object-cover ${!src && "bg-gray-200"}`}
      effect="blur"
      height="auto"
    />
  );
};

export default Image;

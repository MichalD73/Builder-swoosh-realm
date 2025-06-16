interface RawImgProps {
  image: string;
  alt: string;
  className?: string;
}

const RawImg = ({ image, alt, className = "" }: RawImgProps) => {
  return <img src={image} alt={alt} className={`block ${className}`} />;
};

export default RawImg;

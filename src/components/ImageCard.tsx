import { IImage } from "../models";

interface ImageCardProps {
  image: IImage;
}

function ImageCard({ image }: ImageCardProps) {
  const { webformatURL: url, user, views, downloads, likes, tags } = image;

  return (
    <div className="w-80 h-[30rem] rounded-md shadow-lg overflow-hidden mb-10">
      <img src={url} alt="pixabay src" className="w-full h-1/2 object-cover" />
    </div>
  );
}

export default ImageCard;

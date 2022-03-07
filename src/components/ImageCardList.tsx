import ImageCard from "components/ImageCard";
import { IImage } from "models";

interface ImageCardListProps {
  images: IImage[];
}

function ImageCardList(props: ImageCardListProps) {
  const { images } = props;
  return (
    <div className="w-full flex flex-wrap flex-row justify-between mt-10">
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
}

export default ImageCardList;

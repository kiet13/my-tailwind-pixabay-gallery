import ImageCard from "components/ImageCard";
import { IImage } from "models";

interface ImageCardListProps {
  images: IImage[];
}

function ImageCardList(props: ImageCardListProps) {
  const { images } = props;
  return (
    <div className="w-full grid xl:grid-cols-4 xl:gap-15 md:grid-cols-3 sm:grid-cols-2 gap-10 p-10">
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
}

export default ImageCardList;

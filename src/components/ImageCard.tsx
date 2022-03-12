import Tag from "components/Tag";
import { IImage } from "../models";

interface ImageCardProps {
  image: IImage;
}

function ImageCard({ image }: ImageCardProps) {
  const { webformatURL: url, user, views, downloads, likes, tags } = image;
  const tagList = tags?.split(",");

  return (
    <div className="w-ful md:h-[28rem] sm:h-96 rounded-md shadow-lg overflow-hidden relative">
      <img src={url} alt="pixabay src" className="w-full h-1/2 object-cover" />
      <div className="p-5">
        <h3 className="text-purple font-bold text-xl mb-2">Photo by {user}</h3>
        {[
          { title: "Views", data: views },
          { title: "Downloads", data: downloads },
          { title: "Likes", data: likes },
        ].map(({ title, data }) => (
          <p key={title}>
            <b>{title}:</b> {data}
          </p>
        ))}
      </div>
      <div className="absolute bottom-2 m-5">
        {tagList?.map((tag) => (
          <Tag key={tag} className="mr-2 last-mr-0">
            {tag}
          </Tag>
        ))}
      </div>
    </div>
  );
}

export default ImageCard;

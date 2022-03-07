import { imagesApis } from "apis";
import ImageCardList from "components/ImageCardList";
import SearchBar from "components/SearchBar";
import { IImage } from "models";
import { useCallback, useEffect, useState } from "react";

const { getImages } = imagesApis;

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [images, setImages] = useState<IImage[]>([]);

  const fetchData = useCallback(async () => {
    const data = await getImages(searchTerm);
    setImages(data);
  }, [searchTerm]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="w-full py-8 px-10">
      <SearchBar submitTerm={setSearchTerm} />
      <ImageCardList images={images} />
    </div>
  );
}

export default App;

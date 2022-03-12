import { imagesApis } from "apis";
import ImageCardList from "components/ImageCardList";
import SearchBar from "components/SearchBar";
import Spin from "components/Spin";
import { IImage } from "models";
import { useCallback, useEffect, useState } from "react";

const { getImages } = imagesApis;

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [images, setImages] = useState<IImage[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  const fetchData = useCallback(async () => {
    setIsFetching(true);
    const data = await getImages(searchTerm);
    setImages(data);
    setIsFetching(false);
  }, [searchTerm]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="w-full py-8 px-10">
      <SearchBar submitTerm={setSearchTerm} />
      {isFetching ? (
        <Spin className="mt-20 mx-auto w-10 h-10 fill-green-500" />
      ) : (
        <ImageCardList images={images} />
      )}
    </div>
  );
}

export default App;

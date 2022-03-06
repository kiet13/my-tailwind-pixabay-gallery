import { useEffect, useState, useCallback } from "react";
import SearchBar from "./components/SearchBar";
import { imagesApis } from "./apis";

const { getImages } = imagesApis;

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = useCallback(async () => {
    const data = await getImages(searchTerm);
    console.log(data);
  }, [searchTerm]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="w-full py-8 px-10">
      <SearchBar submitTerm={setSearchTerm} />
    </div>
  );
}

export default App;

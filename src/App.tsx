import { useState } from "react";
import SearchBar from "./components/SearchBar";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm);

  return (
    <div className="w-full py-8 px-10">
      <SearchBar submitTerm={setSearchTerm} />
    </div>
  );
}

export default App;

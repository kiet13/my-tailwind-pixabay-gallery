import Button from "./Button";
import { ChangeEvent, useState, useRef, useEffect, Dispatch } from "react";

interface SearchBarProps {
  submitTerm: Dispatch<React.SetStateAction<string>>;
}

function SearchBar(props: SearchBarProps) {
  const { submitTerm } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const [term, setTerm] = useState("");

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSearchTermChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value);
  };

  return (
    <form
      id="search-form"
      onSubmit={() => submitTerm(term)}
      className="w-96 m-auto flex flex-row justify-between pb-2 border-b-[1px] border-b-green-500"
    >
      <input
        type="text"
        name="searchTerm"
        value={term}
        onChange={handleSearchTermChange}
        placeholder="Search Image Term..."
        ref={inputRef}
        className="p-2 outline-none"
      />
      <Button form="search-form" type="submit">
        Search
      </Button>
    </form>
  );
}

export default SearchBar;

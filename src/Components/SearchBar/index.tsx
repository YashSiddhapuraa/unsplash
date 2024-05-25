import { useEffect, useState } from "react";
import { SearchSVG } from "../../Assets/Icons/SearchSVG";
import { useDispatch } from "react-redux";
import { getSearchString } from "../../App/features/searchImages";
import { useDebounce } from "use-debounce";

const SearchBar = () => {
  const [tempSearch, setTempSearch] = useState("");
  const [value] = useDebounce(tempSearch, 1000);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSearchString(value));
  }, [value]);

  return (
    <div className="w-full flex items-center gap-2 rounded-[24px] bg-[#eee] p-2">
      <SearchSVG />
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent border-none outline-none w-full"
        onChange={(e) => setTempSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;

"use client";
import { useSearchQuery } from "@/hooks/useSearchQuery";
import { type ChangeEvent } from "react";

const Search = () => {
  const { search, updateURLSearchParams, setSearch } = useSearchQuery();
  const onSubmit = (formData: FormData) => {
    const searchQuery = formData.get("q") as string;
    updateURLSearchParams(searchQuery);
  };

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
    updateURLSearchParams(e.target.value);
  }
  return (
    <div className="mx-auto w-full max-w-[80%]">
      <form action={onSubmit}>
        <input
          type="search"
          name="q"
          id="search"
          value={search.toString()}
          onChange={handleChange}
          placeholder="search for anything"
          className="h-[50px] w-full rounded-[3px] px-5 font-light text-black outline-none"
        />
      </form>
    </div>
  );
};

export default Search;

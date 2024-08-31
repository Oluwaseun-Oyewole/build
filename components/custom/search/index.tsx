const Search = () => {
  return (
    <div className="mx-auto w-full max-w-[80%]">
      <input
        type="search"
        name="search"
        id="search"
        placeholder="search for anything"
        className="h-[50px] w-full rounded-[3px] px-5 font-light text-black outline-none"
      />
    </div>
  );
};

export default Search;

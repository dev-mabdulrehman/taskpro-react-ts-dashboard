const SearchBar = () => {
    return (
        <label className="border border-gray-500 w-60 flex relative rounded-md group" htmlFor="search-bar">
            <i className="fa-solid fa-magnifying-glass absolute top-1/2 -translate-y-1/2 text-xl left-1 text-gray-500 group-focus-within:text-black/80"></i>
            <input type="text" id="search-bar" className="p-2 pl-8 rounded-md w-full" placeholder="Search for tasks..."></input>
        </label>
    )
}

export default SearchBar
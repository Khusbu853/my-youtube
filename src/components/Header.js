import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";


const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector(store => store.search)
  
  useEffect(() => {
    // make an api call after every key press
    // but if the difference between 2 API calls is <200ms, decline an API call

    const timer = setTimeout(() => {
      if(searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery])
      } else {
        getSearchSuggestions()
      }
    }, 200);

    return () => {
      clearTimeout(timer)
    }
  },[searchQuery]);


  const getSearchSuggestions = async () => {
    console.log(searchQuery)
    const data = await fetch(YOUTUBE_SEARCH_API+ searchQuery)
    const json = await data.json()
    // console.log(json[1])
    setSuggestions(json[1])


    // if search item not present in cache, make an api call and update the cache
    dispatch(cacheResults({
      [searchQuery]: json[1],
    }))
  }



  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu()) 
  }

  // const handleSuggestionClick = (suggestion) => {
  //   setSearchQuery(suggestion);
  //   setShowSuggestions(false);
  // };


  return (
    <div className="grid grid-flow-col p-5 items-end fixed bg-white w-full">
      <div className="flex col-span-1">
        <img
        onClick={() => toggleMenuHandler()}
          className="h-6 mr-6 cursor-pointer"
          src="https://cdn-icons-png.flaticon.com/512/3917/3917215.png"
          alt="menu"
        />
        <img
          className="h-6"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          alt="logo"
        />
      </div>
      <div className="col-span-10 px-10">
        <div className="flex ">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            className="w-1/2 p-2 px-5 border border-gray-400 rounded-l-full"
          />
          <div className="px-4 py-2 bg-gray-100 border border-gray-400 rounded-r-full cursor-pointer" >
            🔍
          </div>
          <img
          className="h-9 mx-6 p-2 mt-1 bg-gray-100 border rounded-full"
          src="https://cdn-icons-png.flaticon.com/512/25/25682.png"
          alt="user-icon"
        />
        </div>
        
          {showSuggestions && (
            <div className="fixed bg-white py-2 px-5 w-1/3 rounded-lg">
            <ul>
              {suggestions.map((suggestion, i) => (
                <div key={i} >
                  <li className=" py-2 m-1 hover:bg-gray-100 cursor-pointer" >
                    🔍 {suggestion}
                  </li>
                </div>
              ))}
            </ul>
          </div>
          )}
        
      </div>
      <div className="col-span-1">
        <img
          className="h-9"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Header;

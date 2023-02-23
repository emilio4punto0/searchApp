//utils
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBox() {
  const [input, setInput] = useState("");

  const letsGoFor = useNavigate();

  const handleInput = (e) => {
    if (e.target.value[0] !== " ") {
      setInput(e.target.value);
    }
  };
  return (
    <>
      <div id="searchBox" className="search-box">
        <div className="search-box__container">
          <img src="./src/assets/Logo_ML.png" className="logo-img" />
          <form className="search-box__input-container">
            <input
              type="text"
              className="search-box__input-search-box"
              placeholder="Nunca dejes de buscar"
              onChange={(e) => handleInput(e)}
              value={input}
            />
            <button
              type="submit"
              className="search-button"
              onClick={(e) => {
                e.stopPropagation();
                letsGoFor(`/api/items/${input}`);
              }}
            >
              <img
                className="search-icon"
                src="https://icongr.am/feather/search.svg?size=20&color=#666"
              />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

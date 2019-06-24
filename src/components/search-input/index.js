import React, { useState } from "react";
import style from "./search-input.module.scss";
import Icon, { ICON_SEARCH } from "../icon";

function SearchInput() {
  const [inputValue, setValue] = useState("");
  const [isFocus, setFocusState] = useState(false);

  return (
    <div className={style.searchInput}>
      <input
        maxLength="30"
        className={`${style.input} ${isFocus ? style.inputFocus : ""}`}
        value={inputValue}
        onChange={e => setValue(e.target.value)}
        onFocus={() => setFocusState(true)}
        onBlur={() => setFocusState(false)}
      />
      <button className={style.button}>
        <Icon name={ICON_SEARCH} />
      </button>
    </div>
  );
}

export default SearchInput;

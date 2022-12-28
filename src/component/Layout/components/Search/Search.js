import React, { useEffect, useRef, useState } from "react";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";

import AccountItem from "../../../AccountItem";
import { Wrapper as PopperWrapper } from "../../../popper";
import { useDebounce } from "../../../../hook";
import * as searchService from "../../../../apiServices/searchService";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const debounced = useDebounce(searchValue, 500);

  const inputRef = useRef();

  // logic search
  useEffect(() => {
    if(!debounced.trim()){
      return ;
    }

    // call api
    const fetchApi = async () => {
      setLoading(true);
      const result = await searchService.search(debounced);
      setSearchResult(result) ;
      setLoading(false);
      console.log(result);
    };
    fetchApi();
  }, [debounced]);

  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;
    if(!searchValue.startsWith(' ')){
      setSearchValue(e.target.value);
    }
  }


  return (
    <Tippy
      interactive
      visible={showResult && searchResult.length > 0}
      render={(attrs) => (
        <div className={cx("search-result")} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h5 className={cx("search-title")}>Accounts</h5>
            {searchResult.map((result) => (
              <AccountItem key={result.id} data={result} />
            ))}
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      {/* thanh search */}
      <div className={cx("search")}>
        <input
          ref={inputRef}
          value={searchValue}
          placeholder="Search accounts and videos"
          spellCheck={false}
          onChange={handleChange}
          onFocus={() => {
            setShowResult(true);
          }}
        />
        {/* hiện biểu tượng search khi nhập value */}
        {!!searchValue && !loading && (
          <button
            className={cx("clear")}
            onClick={() => {
              setSearchValue("");
              inputRef.current.focus();
            }}
          >
            {/* clear logo */}
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}

        {loading && <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />}

        <button className={cx("search-btn")} onMouseDown={(e) => {e.preventDefault()} }>
          {/* loading */}
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </Tippy>
  );
}

export default Search;

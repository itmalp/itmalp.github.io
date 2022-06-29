import React, { useState } from 'react';
import HOME_ICON from '../../../assets/icons/home.svg';
import SEARCH_ICON from '../../../assets/icons/search.svg';
import '../../../assets/applications/browser.css';

const Browser = () => {
  const [browserLink, setBrowserLink] = useState('https://ekoru.org');
  const [searchStr, setSearchStr] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const searchBrowser = () => {
    if (searchStr) {
      setIsLoading(true);
      setBrowserLink(`https://ekoru.org/?q=${searchStr}`);
      setSearchStr('');
    }
  };
  const changeSearchStr = (e) => {
    e.preventDefault();
    setSearchStr(e.target.value);
  };
  const homeLink = () => {
    setBrowserLink('');
    setTimeout(() => {
      setIsLoading(true);
      setBrowserLink('https://ekoru.org');
    }, 50);
  };
  return (
    <>
      <div className="browser-container">
        <div className="browser-task-container">
          <div className="browser-task-image-container centralise">
            <img src={HOME_ICON} alt="Home" onClick={homeLink} />
          </div>
          <input
            type="text"
            className="browser-search-input"
            placeholder="Search..."
            value={searchStr}
            onKeyUp={(e) => e.keyCode === 13 && searchBrowser()}
            onChange={changeSearchStr}
          />
          <div className="browser-task-image-container centralise">
            <img src={SEARCH_ICON} alt="search" onClick={searchBrowser} />
          </div>
        </div>
        <iframe
          src={browserLink}
          title="Browser"
          onLoad={() => setIsLoading(false)}
        ></iframe>
        {isLoading && (
          <div className="browser-loader centralise">
            <svg
              height="80px"
              width="80px"
              className="loader-rotate"
              style={{ margin: '0 auto' }}
            >
              <circle className="loader-lg-browser" />
            </svg>
          </div>
        )}
      </div>
    </>
  );
};

export default Browser;

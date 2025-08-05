import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'next-i18next';
import SearchClose from '../svg/search-close';
import SearchIcon from '../svg/search-icon';
import Image from 'next/image';

const logo_white = "https://cdn.builder.io/api/v1/image/assets%2F2eec0e2ff94f4d308c45d6069a553596%2F564d310010154b7aa52a90b0b5354628?format=webp&width=800";
const SearchPopup = ({searchOpen, setSearchOpen}) => {
    const { t } = useTranslation('common');
    return (
        <>
    <div className={`search__popup ${searchOpen ? "search-opened" : ""}`}>
      <div className="container">
         <div className="row">
            <div className="col-xxl-12">
               <div className="search__wrapper">
                  <div className="search__top d-flex justify-content-between align-items-center">
                     <div className="search__logo">
                        <Link href="/" onClick={() => setSearchOpen(false)}>
                           <Image src={logo_white} alt="theme-pure" width={150} height={40} />
                        </Link>
                     </div>
                     <div className="search__close">
                        <button onClick={() => setSearchOpen(false)} type="button" className="search__close-btn search-close-btn"> 
                           <SearchClose />                                 
                        </button>
                     </div>
                  </div>
                  <div className="search__form">
                     <form onSubmit={(e) => e.preventDefault()}>
                        <div className="search__input">
                           <input className="search-input-field" type="text" placeholder={t('forms.searchPlaceholder')} />
                           <span className="search-focus-border"></span>
                           <button type="submit"> 
                              <SearchIcon />
                           </button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
        </>
    );
};

export default SearchPopup;

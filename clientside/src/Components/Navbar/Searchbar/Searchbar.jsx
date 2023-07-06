import React from 'react'
import './Searchbar.css'
import {BsMicFill} from 'react-icons/bs';
import {FaSearch} from 'react-icons/fa';
import { IoMdNotificationsOutline } from "react-icons/io"
import SearchList from './SearchList';
import { useState } from 'react'



function SearchBar () {
  const [searchQuery,setSearchQuery] = useState("");
  const [seachListA,setSeachList] = useState(false);
  const TitleArray = ["video","video2","Animation video","Movies"].filter(q=>q.toUpperCase().includes(searchQuery.toUpperCase()));


  return (
    
    <>
    <div className='SearchBar_Container'>
        <div className="SearchBar_Container2" >
            <div className="search_div">
              <input type="text" className='iBox_SearchBar' placeholder='Search'

              onChange={e=>setSearchQuery(e.target.value)}
              value={searchQuery}
              onClick={e=>setSeachList(true)}
              />
             <FaSearch className='searchIcon_SeachBar' 
             onClick={e=>setSeachList(false)}
              />
             <BsMicFill className='Mic_SeachBar'/>
             <IoMdNotificationsOutline className='Mic_SeachBar'/>
              { searchQuery && seachListA &&
                <SearchList
                setSearchQuery={setSearchQuery}
                TitleArray = {TitleArray}
                />
                 
              }
            </div>
        </div>
       
     </div>
    </>
  );
}

export default SearchBar
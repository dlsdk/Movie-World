import React, { useState } from 'react'
import './Search.css'
import { Input } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import Actions from 'redux/actions/'
import selectors from 'redux/selectors'
import SearchList from 'components/SearchList/SearchList'


const { searchActions: {getFromSearch} } = Actions
const {
  Search: {selectsearchList,selectSearchError},
  Trend: {selectTrendList}
} = selectors

export default function Search() {
  
  const dispatch = useDispatch();
  const searchList = useSelector(selectsearchList);
  const error = useSelector(selectSearchError);
  const trend = useSelector(selectTrendList);
  const [isSearchSuccess,setIsSearchSuccess] = useState(false);

  const onSearch = (query) => {
    let status = false;
    if (query){
        dispatch(getFromSearch(query))
        status = true;
        console.log("isErrorExist ne döndü ? :",error);
    }
    setIsSearchSuccess(status);
  }

  return (
    <div className='search'> 
     <div>
      <Input.Search  className='searchbar'
            placeholder="search movie"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
        />
      </div>
      <div className='container'>
        <SearchList searchList={isSearchSuccess === true ? searchList : trend}/> 
      </div>
    </div>
  )
}

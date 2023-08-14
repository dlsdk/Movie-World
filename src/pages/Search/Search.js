import React, { useState } from 'react'
import './Search.css'
import { Input } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import Actions from '../../redux/actions'
import selectors from '../../redux/selectors'
import { useNavigate } from 'react-router-dom/dist'
import SearchList from '../../components/SearchList/SearchList'
import { Alert } from 'antd'


const {searchActions: {getFromSearch}} = Actions
const {Search: {selectsearchList},Trend: {selectTrendList}} = selectors

export default function Search() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchList = useSelector(selectsearchList);
  const trend = useSelector(selectTrendList);
  const [isSearchSuccess,setIsSearchSuccess] = useState(false);

  const onSearch = (query) => {
    let status = false;
    if (query){
        dispatch(getFromSearch(query))
        status = true;
    }
    setIsSearchSuccess(status);
  }

  return (
    <div className='search'>
      <div className='container'>
        <Input.Search
          placeholder="search movie"
          allowClear
          enterButton="Search"
          size="large"
          className='searchbar'
          onSearch={onSearch}
        />
        {isSearchSuccess ? <SearchList searchList={searchList}/> :<> <Alert className='alert' showIcon type='warning' message="Please Search Movie First!"/>
        <SearchList searchList={trend}/>
        </>}
        
      </div>
    </div>
  )
}

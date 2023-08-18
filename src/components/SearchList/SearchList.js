import React from 'react'
import {List, Alert,Image} from 'antd'
import VirtualList from 'rc-virtual-list';
import './SearchList.css'
import noimage from 'images/post/noimage.png'
import { useNavigate } from 'react-router-dom/dist';
import {InfoCircleOutlined} from '@ant-design/icons'

export default function SearchList({searchList}) {
  
  const navigate = useNavigate();
  
  return (<>
    {searchList && searchList.length !== 0 ? 
        <List className='list'>
            <VirtualList
                data={searchList}
                height={520} 
                itemKey="username" 
            >
            {(item) => (
                <List.Item  onClick={() => navigate(`/blog/post/${item.id}`, { state: item })} className='item' key={item.title}>
                    <Image className='img' height={400} width={267} preview={false} src={item.poster_path ? `https://image.tmdb.org/t/p/w780${item.poster_path}` : noimage}/>
                    <div className="content">
                      <div className="text">
                        <h3>{item.title}</h3>
                        <InfoCircleOutlined className='icon'/>
                      </div>
                    </div>
                </List.Item>
            )}
             </VirtualList>
        </List>
            : 
            <div className='lista'>
               <Alert  style={{width:'fit-content'}} showIcon message="Sorry, we couldn't find any movie for this search" type="error"/>
            </div>
       }
       </>
  )
}



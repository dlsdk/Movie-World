import React from 'react'
import style from './Reviews.module.css'
import {Avatar, List, Alert} from 'antd'
import {UserOutlined} from '@ant-design/icons'
import VirtualList from 'rc-virtual-list';

export default function ReviewList({reviewList}) {
  return (<>
    {reviewList && reviewList.length !== 0 ? 
        <List className={style.list}>
            <VirtualList
                data={reviewList}
                height={178} // 300 idi
                itemKey="username" 
            >
            {(item) => (
            <>
                <List.Item  key={item.author_details.name}>
                    <List.Item.Meta className={style.listmeta} 
                        avatar={<Avatar icon={<UserOutlined/>} size={80} src={`https://image.tmdb.org/t/p/w780${item.author_details.avatar_path}`} />}
                        title={<h3 className={style.metatitle}>{item.author_details.username}</h3>}/>
                </List.Item>
                <p>{item.content}</p>
               </>
            )}
             </VirtualList>
        </List>
            : 
        <Alert style={{width:'-webkit-fill-available'}}  showIcon message="Can't find any review. You can write first !" type="warning"/>}
       </>
  )
}

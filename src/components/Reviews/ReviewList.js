import React, { useRef, useEffect } from 'react';
import style from './Reviews.module.css';
import { Avatar, List, Alert } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import VirtualList from 'rc-virtual-list';
import localStorageHelperFunctions from 'helpers/LocalStorageHelperFunctions';

const { getFromLocalStorage } = localStorageHelperFunctions;

export default function ReviewList({ reviewList }) {
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTo(reviewList.length * 1000);
    }
  }, [reviewList]);

  return (
    <>
      {reviewList && reviewList.length !== 0 ? (
        <List className={style.list}>
          <VirtualList
            data={reviewList}
            height={178} // 300 idi
            itemKey="username"
            ref={listRef}
          >
            {(item) => (
              <div>
                <Avatar
                  icon={<UserOutlined />}
                  size={80}
                  src={
                    item.author_details.username ===
                    getFromLocalStorage('currentUser')?.uname
                      ? item.author_details.avatar_path
                      : `https://image.tmdb.org/t/p/w780${item.author_details.avatar_path}`
                  }
                />
                <h3 className={style.metatitle}>{item.author_details.username}</h3>
                <p className={style.content}>{item.content}</p>
              </div>
            )}
          </VirtualList>
        </List>
      ) : (
        <Alert
          style={{ width: '-webkit-fill-available' }}
          showIcon
          message="Can't find any review. You can write first !"
          type="warning"
        />
      )}
    </>
  );
}

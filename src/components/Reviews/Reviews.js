import React from 'react'
import style from './Reviews.module.css'
import  { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import Actions from '../../redux/actions';
import selectors from '../../redux/selectors';
import ReviewList from './ReviewList';
import { Spin  } from  'antd'

const {Reviews: {selectReview,selectReviewPending}} = selectors
const {reviewsActions: {getReviews}} = Actions

export default function Reviews({id}) {
  
    const dispatch = useDispatch();     
   
    const isLoading = useSelector(selectReviewPending);
    useEffect(() => {
        dispatch(getReviews(id)); 
    },[id || reviewList]) 
    const reviewList = useSelector(selectReview); 

  return (
    <>
       <div className={style.review}>
        <h3 className={style.title}>Reviews</h3>
       {isLoading ?  
        <Spin tip="Loading...">
            <div/>
        </Spin>
        :
        <ReviewList reviewList={reviewList}/> } 
       </div>
      
    </>  
    )
}

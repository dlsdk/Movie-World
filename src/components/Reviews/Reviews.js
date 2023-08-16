import React, { useState } from 'react';
import style from './Reviews.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Actions from '../../redux/actions';
import selectors from '../../redux/selectors';
import ReviewList from './ReviewList';
import { Spin } from 'antd';
import helperFunctions from '../../helpers';

const { Reviews: { selectReview, selectReviewPending }, ControlReviews: { selectControlReviews } } = selectors;
const { reviewsActions: { getReviews } } = Actions;
const {getFromLocalStorage} = helperFunctions;


export default function Reviews({ id }) {
    const dispatch = useDispatch();
    const controlReviews = useSelector(selectControlReviews); // yazdığım reviewı controlReviews değişkenine atadım.
    const isLoading = useSelector(selectReviewPending);
    const matchingReview = controlReviews.find(review => review.id === id); // benim yazdığım yorumun bu filmin  için mi yazmışım buluyorum.
    const [totalList,setNewTotalList] = useState([]);
    
    const storedData = getFromLocalStorage(`review_${id}`) ;
    const initialDataFromLocal = storedData ? Object.values(storedData) : [];
    const [dataFromLocal, setDataFromLocal] = useState(initialDataFromLocal);
    
    useEffect(()=> {
        setDataFromLocal(initialDataFromLocal) 
        setNewTotalList([]);
        dispatch(getReviews(id)); // HER TÜRLÜ BİR AL DATAYI
        // eslint-disable-next-line
    },[id])

    const dataFromApi = useSelector(selectReview);

    useEffect(()=> {
        if ( dataFromLocal.length !== 0 ){           //varsa ne null değilse
            setNewTotalList(dataFromLocal);
            localStorage.setItem(`review_${id}`,JSON.stringify(dataFromLocal));
        }
        else{
            setNewTotalList(dataFromApi);
            localStorage.setItem(`review_${id}`,JSON.stringify(dataFromApi));    
        }
        // eslint-disable-next-line
    },[dataFromApi])


    useEffect(() => {
        if (matchingReview) {
            setNewTotalList([...totalList, matchingReview]); 
           console.log("yeni değer : ",[...totalList,matchingReview] );
           localStorage.setItem(`review_${id}`,JSON.stringify([...totalList,matchingReview]));
        }
        // eslint-disable-next-line
    }, [matchingReview]);
      
    return (
        <>
            <div className={style.review}>
                <h3 className={style.title}>Reviews</h3>
                {isLoading ?
                    <Spin tip="Loading...">
                        <div />
                    </Spin>
                    :
                    <ReviewList reviewList={totalList} />
                    }
            </div>
        </>
    );

} 



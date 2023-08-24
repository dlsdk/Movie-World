import React, { useState, useEffect } from 'react';
import style from './Reviews.module.css';
import { useDispatch, useSelector } from 'react-redux';
import Actions from 'redux/actions';
import selectors from 'redux/selectors';
import ReviewList from './ReviewList';
import { Spin } from 'antd';
import helperFunctions from 'helpers';
import { useMemo } from 'react';
const { 
    Reviews: { selectReview, selectReviewPending },
    ControlReviews: { selectControlReviews } 
} = selectors;

const { reviewsActions: { getReviews } } = Actions;
const { localStorageHelperFunctions: {getFromLocalStorage} } = helperFunctions

// YORUMLAR 
function Reviews({ id }) {
    
    const dispatch = useDispatch();
    const controlReviews = useSelector(selectControlReviews); // yazdığım reviewı controlReviews değişkenine atadım.
    const isLoading = useSelector(selectReviewPending);
    const matchingReview = controlReviews.find(review => review.id === id);// benim yazdığım yorumun bu filmin  için mi yazmışım buluyorum.
    const [totalList,setNewTotalList] = useState([]);

    //bu iddeki filmmin yorumlarını localten çek ve arrray halinde sun
    const initialDataFromLocal = useMemo(() => {
        const storedData = getFromLocalStorage(`review_${id}`);
        return storedData ? storedData : [];
    }, [id]);

    
    useEffect(()=> {
        dispatch(getReviews(id)); // HER TÜRLÜ BİR AL DATAYI
    },[id,dispatch])

    const dataFromApi = useSelector(selectReview);
    // Locale kaydet 
    useEffect(()=> {
        if ( initialDataFromLocal.length !== 0 ){  
            setNewTotalList(initialDataFromLocal);
            localStorage.setItem(`review_${id}`,JSON.stringify(initialDataFromLocal));  
        }
        else{
            setNewTotalList(dataFromApi);
            localStorage.setItem(`review_${id}`,JSON.stringify(dataFromApi));    
        }
    },[id,initialDataFromLocal,dataFromApi])

 // YAZDIĞIM YORUM VAR MI VARSA YENİ YORUMU EKLE
    useEffect(() => {
        if (matchingReview) {
            setNewTotalList(prevTotalList => {
                const updatedTotalList = [...prevTotalList, matchingReview];
                localStorage.setItem(`review_${id}`, JSON.stringify(updatedTotalList));
                return updatedTotalList;
            });
        }
    }, [id,matchingReview]);

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

export default React.memo(Reviews);
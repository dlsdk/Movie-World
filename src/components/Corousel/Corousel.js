import React, { useRef } from 'react';
import { Carousel } from 'antd';
import style from './Corousel.module.css';
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import CardC from '../Card/CardC';

export default function Corousel({ list, title }) {
  
  const carouselRef = useRef(null);

  const handlePrev = () => {
    carouselRef.current.prev();
  };

  const handleNext = () => {
    carouselRef.current.next();
  };

  return (
    <>
      <h2 className={style.maintitle}>{title}</h2>
        <div className={style.outerCarouselContainer}>
          <ArrowLeftOutlined className={`${style.button} ${style.buttonleft}`} onClick={handlePrev} />
            <div className={style.innerCarouselContainer}>
              <Carousel
                slidesToScroll={2}
                infinite={true}
                slidesToShow={6}
                ref={carouselRef}
                dots={false}
                autoplay={true}
                autoplaySpeed={2000}>
                  {list &&
                    list.map((listElement, index) => (
                      <CardC index={index} listElement={listElement}/>
                  ))}
              </Carousel>
            </div>
          <ArrowRightOutlined className={`${style.button} ${style.buttonright}`} onClick={handleNext} />
        </div>
    </>
  );
}

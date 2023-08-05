import React, { useRef } from 'react';
import { Carousel, Card, Button } from 'antd';
import style from './Corousel.module.css';
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons';
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
            swipeToSlide={true}
            infinite={true}
            slidesToShow={6}
            ref={carouselRef}
            dots={false}
            autoplay={true}
            autoplaySpeed={2000}
          >
            {list &&
              list.map((listElement, index) => (
                <Card className={style.cards} key={index}>
                  <img
                    className={style.images}
                    alt="example"
                    src={`https://image.tmdb.org/t/p/w780${listElement.poster_path}`}
                  />
                  <h3 className={style.title}>{listElement.title}</h3>
                </Card>
              ))}
          </Carousel>
        </div>
        <ArrowRightOutlined className={`${style.button} ${style.buttonright}`} onClick={handleNext} />
      </div>
    </>
  );
}

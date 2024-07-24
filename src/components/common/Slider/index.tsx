import { useState } from 'react';
import cn from "classnames";
import styles from './styles.module.scss';

type SliderProps = {
  slides: string[];
};

const Slider: React.FC<SliderProps> = ({ slides }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleLeftSliderBtnClick = (slidesNum: number) => {
    setActiveSlide(prevSlideNum => prevSlideNum - 1 >= 0 ? prevSlideNum - 1 : slidesNum - 1);
  }

  const handleRightSliderBtnClick = (slidesNum: number) => {
    setActiveSlide(prevSlideNum => (prevSlideNum + 1) % slidesNum);
  }

  const handleDotSliderBtnClick = (slideNum: number) => {
    setActiveSlide(slideNum);
  }

  return (
    <div className={styles.slider}>
      <div className={cn(styles.slider__button, styles.slider__buttonLeft)} onClick={() => handleLeftSliderBtnClick(slides.length)} />
      <div className={cn(styles.slider__button, styles.slider__buttonRight)} onClick={() => handleRightSliderBtnClick(slides.length)} />

      <div className={styles.slider__slides}>
        {slides.length && <img className={styles.slider__slides__slide} src={slides[activeSlide]} alt={`Слайд ${activeSlide}`} />}
      </div>

      <div className={styles.slider__dots}>
        {slides.map((_, index) => <div className={cn(styles.slider__dots__dot, activeSlide === index && styles.slider__dots__dot_active)} key={`dot-${index}`} onClick={() => handleDotSliderBtnClick(index)} />)}
      </div>
    </div>
  );
};

export default Slider;




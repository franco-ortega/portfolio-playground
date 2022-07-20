import { useEffect, useState } from 'react';
import styles from './Carousel.module.scss';

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);
  const [touchPosition, setTouchPosition] = useState(null);

  useEffect(() => {
    setLength(children.length);
  }, [children]);

  const onNextClick = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const onPrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) return;

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) onNextClick();
    if (diff < -5) onPrevClick();

    setTouchPosition(null);
  };

  return (
    <div className={styles.Carousel}>
      <div>
        <button onClick={onPrevClick} disabled={!currentIndex}>
          &lt;
        </button>
        <div onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
          <div style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {children}
          </div>
        </div>
        <button onClick={onNextClick} disabled={currentIndex === length - 1}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;

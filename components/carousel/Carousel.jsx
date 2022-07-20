import { useEffect, useState } from 'react';
import styles from './Carousel.module.scss';

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

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

  return (
    <div className={styles.Carousel}>
      <div>
        <button onClick={onPrevClick} disabled={!currentIndex}>
          &lt;
        </button>
        <div>
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

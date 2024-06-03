import React, { useState, useEffect, useRef } from 'react';


const CardSlider = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [visibleCardsCount, setVisibleCardsCount] = useState(4);
  const cardsRef = useRef(null);
  const totalCards = 8;

  useEffect(() => {
    const updateCardWidth = () => {
      if (cardsRef.current) {
        const card = cardsRef.current.querySelector('.card');
        if (card) {
          setCardWidth(card.offsetWidth);
          setVisibleCardsCount(Math.floor(cardsRef.current.offsetWidth / card.offsetWidth));
        }
      }
    };

    updateCardWidth();
    window.addEventListener('resize', updateCardWidth);

    return () => {
      window.removeEventListener('resize', updateCardWidth);
    };
  }, []);

  const updateButtons = () => {
    return {
      prevDisabled: currentPosition === 0,
      nextDisabled: currentPosition >= totalCards - visibleCardsCount,
    };
  };

  const handlePrevClick = () => {
    if (currentPosition > 0) {
      setCurrentPosition(currentPosition - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPosition < totalCards - visibleCardsCount) {
      setCurrentPosition(currentPosition + 1);
    }
  };

  const { prevDisabled, nextDisabled } = updateButtons();

  return (
    <div className="card-slider">
      <button id="prev" className="nav-button" onClick={handlePrevClick} disabled={prevDisabled}>
        Previous
      </button>
      <div className="card-container" ref={cardsRef}>
        <div className="cards" style={{ transform: `translateX(-${currentPosition * cardWidth}px)` }}>
          {[...Array(totalCards)].map((_, index) => (
            <div className="card" key={index}>Card {index + 1}</div>
          ))}
        </div>
      </div>
      <button id="next" className="nav-button" onClick={handleNextClick} disabled={nextDisabled}>
        Next
      </button>
    </div>
  );
};

export default CardSlider;
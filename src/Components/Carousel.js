import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import img1 from './Assets/image1.jpg';
import img2 from './Assets/image2.jpg';
import img3 from './Assets/image3.jpg';

const items = [
  {

    src: img1,
    altText: 'Slide 1',
    caption: 'The one-stop destination for things cute!',
    captionHeader: "YOUR LI'S ONE'S STYLE FILE!"
  },
  {
    src: img2,
    altText: 'Slide 2',
    caption: 'Buy the best quality women cloths from here at cheapest price',
    captionHeader: "YOUR LIFE, YOUR CHOICE"
  },
  {
    src: img3,
    altText: "Silde 3",
    caption: "Men's accessories & footwear upto 70% off",
    captionHeader: 'BIG BRANDS SALE'
  }
];

const Carousel1 = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.src}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img src={item.src} alt={item.altText} style={{ width: "100%", height: "100%" }} />
        <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.captionHeader} />
      </CarouselItem>
    );
  });

  return (
    <div>
      <style>
        {
          `.custom-tag {
              max-width: 100%;
              height: 500px;
              background: black;
            }`
        }
      </style>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>
  );
}






export default Carousel1;
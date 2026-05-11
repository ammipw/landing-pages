import { useEffect, useRef, useState } from 'react';
import styles from './Carousel.module.css';

interface CarouselProps {
  children?: React.ReactNode;
  indicator?: boolean;
}

function Carousel({ children, indicator = false }: CarouselProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isOverflow, setIsOverflow] = useState<boolean>(false);

  useEffect(() => {
    const el = ref.current;
    if (el) {
      setIsOverflow(el.scrollWidth > el.clientWidth);
    }
  }, []);

  return (
    <div ref={ref} className={styles.carousel}>
      {isOverflow && indicator && <span className={styles['carousel-indicator']}>{isOverflow ? '>' : ''}</span>}
      {children}
    </div>
  );
}

interface CarouselItemProps {
  children?: React.ReactNode;
  href?: string;
}

function CarouselItem({ children, href }: CarouselItemProps) {
  if (href) {
    return (
      <a href={href} className={styles['carousel-item']}>
        {children}
      </a>
    );
  }

  return (
    <span className={styles['carousel-item']}>
      {children}
    </span>
  );
}

Carousel.Item = CarouselItem;

export default Carousel;
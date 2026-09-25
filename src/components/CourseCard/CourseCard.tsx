import React from 'react';
import styles from './CourseCard.module.css';
import type { Course } from '../../types/api.types';

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  // بررسی منطق قیمت‌گذاری
  const isFree = course.price === 0;
  const hasDiscount = course.discounted_price > 0 && course.discounted_price < course.price;

  // تابع کمکی برای فرمت کردن قیمت به شکل استاندارد فارسی
  const formatPrice = (price: number) => {
    return price.toLocaleString('fa-IR') + ' تومان';
  };

  return (
    <a 
      href={course.course_link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={styles.card}
    >
      <div className={styles.imageWrapper}>
        <img 
          src={course.image_url} 
          alt={course.course_name} 
          className={styles.image} 
          loading="lazy" 
        />
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{course.course_name}</h3>
        
        <div className={styles.meta}>
          <span className={styles.instructor}>{course.instructor}</span>
          <span className={styles.dot}>•</span>
          <span className={styles.level}>{course.course_level}</span>
        </div>
        
        <div className={styles.priceSection}>
          {isFree ? (
            <span className={styles.freeBadge}>رایگان</span>
          ) : (
            <div className={styles.pricing}>
              {hasDiscount && (
                <span className={styles.oldPrice}>{formatPrice(course.price)}</span>
              )}
              <span className={styles.finalPrice}>
                {hasDiscount ? formatPrice(course.discounted_price) : formatPrice(course.price)}
              </span>
            </div>
          )}
        </div>
      </div>
    </a>
  );
};
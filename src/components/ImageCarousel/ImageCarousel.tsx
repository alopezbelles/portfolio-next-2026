'use client';

import Image from 'next/image';
import type { GalleryImage } from '@/lib/getRandomGalleryImages';
import './ImageCarousel.css';

interface ImageCarouselProps {
  images: GalleryImage[];
}

function ImageCarousel({ images }: ImageCarouselProps) {
  if (!images || images.length === 0) {
    return null;
  }

  // Duplicar el array para crear efecto infinito suave
  const duplicatedImages = [...images, ...images];

  return (
    <section className="image-carousel">
      <div className="carousel-track">
        {duplicatedImages.map((image, index) => (
          <figure key={`${image.projectSlug}-${index}`} className="carousel-image">
            <Image
              src={image.src}
              alt={`Screenshot from ${image.projectTitle}`}
              width={450}
              height={300}
              sizes="(max-width: 480px) 270px, (max-width: 768px) 300px, (max-width: 1024px) 375px, 450px"
              className="carousel-img"
              priority={index < 6} 
            />
          </figure>
        ))}
      </div>
    </section>
  );
}

export default ImageCarousel;
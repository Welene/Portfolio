import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import './EmblaCarousel.css';

export function EmblaCarousel() {
	const [emblaRef] = useEmblaCarousel();

	const photos = [
		'/src/assets/photos/1.jpg',
		'/src/assets/photos/2.jpg',
		'/src/assets/photos/3.jpg',
		'/src/assets/photos/11.jpg',
		'/src/assets/photos/6.jpg',
		'/src/assets/photos/7.jpg',
	];

	return (
		<div className="embla" ref={emblaRef}>
			<div className="embla__container">
				{photos.map((src, index) => (
					<div className="embla__slide" key={index}>
						<figure className="embla__slide-figure">
							<img
								src={src}
								alt={`Slide ${index + 1}`}
								className="embla__slide-img"
							/>
						</figure>
					</div>
				))}
			</div>
		</div>
	);
}

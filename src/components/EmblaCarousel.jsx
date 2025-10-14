import React, { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import './EmblaCarousel.css';

export function EmblaCarousel({ photos = [] }) {
	const [emblaRef, emblaApi] = useEmblaCarousel();
	const [selectedIndex, setSelectedIndex] = useState(0);

	const onSelect = useCallback(() => {
		if (!emblaApi) return;
		setSelectedIndex(emblaApi.selectedScrollSnap());
	}, [emblaApi]);

	useEffect(() => {
		if (!emblaApi) return;
		emblaApi.on('select', onSelect);
		onSelect();
	}, [emblaApi, onSelect]);

	const scrollTo = useCallback(
		(index) => emblaApi && emblaApi.scrollTo(index),
		[emblaApi]
	);

	return (
		<div className="embla">
			<div className="embla__viewport" ref={emblaRef}>
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

			<div className="embla__dots">
				{photos.map((_, index) => (
					<button
						key={index}
						onClick={() => scrollTo(index)}
						className={`embla__dot ${
							index === selectedIndex ? 'is-selected' : ''
						}`}
					/>
				))}
			</div>
		</div>
	);
}

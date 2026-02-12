import { 
	useBlockProps, 
	RichText, 
	InspectorControls, 
	MediaUpload, 
	MediaUploadCheck 
} from '@wordpress/block-editor';

import { 
	PanelBody, 
	TextControl, 
	TextareaControl, 
	ToggleControl, 
	Button 
} from '@wordpress/components';

import { useState } from '@wordpress/element';

import './editor.scss';


/* =========================
   Slide Item Component
========================= */

const SlideItem = ({ index, slide, onImageChange, onRemove }) => {
	return (
		<div className='slide-item'>
			<div className='slide-item-image'>
				
				{slide.lightImage && (
					<div className='image-box'>
						<img src={slide.lightImage} alt="" />
					</div>
				)}

				<MediaUploadCheck>
					<MediaUpload
						onSelect={(media) =>
							onImageChange(media.url, index, "lightImage")
						}
						allowedTypes={['image']}
						render={({ open }) => (
							<Button
								className='components-button is-secondary'
								onClick={open}
							>
								{slide.lightImage ? 'Replace' : 'Upload'}
							</Button>
						)}
					/>
				</MediaUploadCheck>
			</div>

			<Button
				className='components-button is-destructive'
				onClick={() => onRemove(index)}
			>
				Remove
			</Button>
		</div>
	);
};


/* =========================
   Main Edit Component
========================= */

export default function Edit({ attributes, setAttributes }) {

	const { 
		title, 
		description, 
		link, 
		linkAnchor, 
		video, 
		image, 
		isVideo, 
		slides = [] 
	} = attributes;

	const [isVideoUpload, setIsVideoUpload] = useState(isVideo);


	/* =========================
	   Slide Logic
	========================= */

	const onSlideChange = (updatedSlide, index) => {
		const updatedSlides = [...slides];
		updatedSlides[index] = updatedSlide;
		setAttributes({ slides: updatedSlides });
	};

	const removeSlide = (index) => {
		const updatedSlides = slides.filter((_, i) => i !== index);
		setAttributes({ slides: updatedSlides });
	};

	const handleImageChange = (url, index, imageType) => {
		const updatedSlide = {
			...slides[index],
			[imageType]: url
		};
		onSlideChange(updatedSlide, index);
	};


	return (
		<>
			<InspectorControls>

				{/* =========================
				   Hero Settings
				========================= */}

				<PanelBody title="Hero Settings">

					<TextControl
						label="Title"
						value={title}
						onChange={(title) => setAttributes({ title })}
					/>

					<TextareaControl
						label="Description"
						value={description}
						onChange={(description) => setAttributes({ description })}
					/>

					<TextControl
						label="Button URL"
						value={link}
						onChange={(link) => setAttributes({ link })}
					/>

					<TextControl
						label="Button Value"
						value={linkAnchor}
						onChange={(linkAnchor) => setAttributes({ linkAnchor })}
					/>

					<ToggleControl
						label="Upload Video"
						checked={isVideoUpload}
						onChange={(value) => {
							setIsVideoUpload(value);
							setAttributes({ 
								isVideo: value, 
								video: '', 
								image: '' 
							});
						}}
					/>

					{isVideoUpload ? (
						video && (
							<video controls muted>
								<source src={video} type="video/mp4" />
							</video>
						)
					) : (
						image && <img src={image} alt="Uploaded" />
					)}

					<MediaUploadCheck>
						<MediaUpload
							onSelect={(media) => {
								if (isVideoUpload) {
									setAttributes({ video: media.url });
								} else {
									setAttributes({ image: media.url });
								}
							}}
							allowedTypes={isVideoUpload ? ['video'] : ['image']}
							render={({ open }) => (
								<Button 
									className='components-button is-secondary media-upload' 
									onClick={open}
								>
									{isVideoUpload ? 'Upload Video' : 'Upload Image'}
								</Button>
							)}
						/>
					</MediaUploadCheck>

				</PanelBody>


				{/* =========================
				   Hero Slider
				========================= */}

				<PanelBody title="Hero Slider">

					{slides.map((slide, index) => (
						<SlideItem
							key={index}
							index={index}
							slide={slide}
							onImageChange={handleImageChange}
							onRemove={removeSlide}
						/>
					))}

					{/* Mass Upload */}
					<MediaUploadCheck>
						<MediaUpload
							onSelect={(mediaItems) => {
								const newSlides = mediaItems.map(item => ({
									lightImage: item.url
								}));

								setAttributes({
									slides: [...slides, ...newSlides]
								});
							}}
							allowedTypes={['image']}
							multiple
							gallery
							render={({ open }) => (
								<Button
									className='components-button is-primary'
									onClick={open}
								>
									Add Slides
								</Button>
							)}
						/>
					</MediaUploadCheck>

				</PanelBody>

			</InspectorControls>


			{/* =========================
			   Front Preview
			========================= */}

			<div {...useBlockProps()}>

				{video && (
					<video 
						className='video-bg' 
						loop 
						autoPlay 
						muted 
						playsInline 
						width="100%" 
						height="100%"
					>
						<source src={video} type="video/mp4" />
					</video>
				)}

				{image && (
					<img 
						className='image-bg' 
						src={image} 
						alt="Background" 
					/>
				)}

				<div className='hero-mask'></div>

				<div className='hero-content'>
					<RichText
						tagName="h1"
						className='hero-title'
						value={title}
						onChange={(title) => setAttributes({ title })}
					/>
					<RichText
						tagName="p"
						className='hero-description'
						value={description}
						onChange={(description) => setAttributes({ description })}
					/>
					<a href={link} className='hero-button shadow'>
						{linkAnchor}
					</a>
				</div>

				{slides.length > 0 && (
					<div className='hero-slider'>
						<div className='slider-container'>
							<div className='swiper-wrapper'>
								{slides.map((slide, index) => (
									<div 
										key={index} 
										className='swiper-slide slide-item'
									>
										<img 
											src={slide.lightImage} 
											alt="" 
											className='light-logo' 
										/>
									</div>
								))}
							</div>
						</div>
					</div>
				)}

			</div>
		</>
	);
}

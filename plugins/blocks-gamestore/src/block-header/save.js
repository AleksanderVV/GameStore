
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { memberLink, cartLink } = attributes;
	return (
		<div { ...useBlockProps.save() }>
			<div className='inner-header'>
				<InnerBlocks.Content />
				<div className='right-section'>
					<div className='header-search'></div>
					<div className='header-mode-switcher'></div>
					{cartLink && (<div className='header-cart-link'>
										<a href={cartLink}></a>
									</div>)
					}
					{memberLink && (<div className='header-member'>
										<a href={memberLink}>Member Area</a>
									</div>)
					}
				</div>
			</div>
		</div>
	);
}

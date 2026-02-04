
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { memberLink, cartLink } = attributes;
	return (
		<div { ...useBlockProps.save() }>
			<div className='inner-header'>
				<InnerBlocks.Content />
				<div className='right-section'>
					<div className='header-search'><img src="/wp-content/uploads/2026/02/search-normal.svg" alt="Cart" /></div>
					<div className='header-mode-switcher'><img src="/wp-content/uploads/2026/02/switch-theme.svg" alt="Cart" /></div>
					{cartLink && (<div className='header-cart-link'>
										<a href={cartLink}><img src="/wp-content/uploads/2026/02/cart.svg" alt="Cart" /></a>
									</div>)
					}
					{memberLink && (<div className='header-member-link'>
										<a href={memberLink}>Member Area</a>
									</div>)
					}
				</div>
			</div>
		</div>
	);
}

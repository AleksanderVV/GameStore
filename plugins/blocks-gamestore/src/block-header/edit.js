import { useBlockProps, InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';

import './editor.scss';

export default function Edit({attributes, setAttributes}) {
	const { memberLink, cartLink } = attributes;
	return (
		<>
			<InspectorControls>
				<PanelBody title="Header Links">
					<TextControl 
						label="Member Link" 
						value={memberLink}
						onChange={value => setAttributes({ memberLink: value })}
						/>
					<TextControl 
						label="Cart Link" 
						value={cartLink} 
						onChange={value => setAttributes({ cartLink: value })} />
				</PanelBody>
			</InspectorControls>
			<div { ...useBlockProps() }>
				<div className='inner-header'>
					<InnerBlocks />
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
		</>
	);
}

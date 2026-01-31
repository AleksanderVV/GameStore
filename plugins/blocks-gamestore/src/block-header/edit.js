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
		</>
	);
}

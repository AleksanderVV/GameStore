import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
  const { copyrights, logos, links } = attributes;
	return (
		<div { ...useBlockProps.save() }>
			<div className='wrapper inner-footer'>
          <InnerBlocks.Content />
          <div className='footer-line'></div>
          <div className='footer-bottom'>
            <div className='left-part'>
              {copyrights && (<p>{ copyrights }</p>)}
              {logos && (
                <div className="footer-logos">
                {logos.map((logo, index) => (
                  <a key={index} href={logo.url} target="_blank" rel="nofollow noreferrer">
                    <img src={logo.image} class="light-logo" alt="Logo" />
                    <img src={logo.imageDark} class="dark-logo" alt="Logo" />
                  </a>
                ))}
                </div>
              )}
            </div>
            <div className='right-part'>
              {links && (
                links.map((link, index) => (
                  <a key={index} href={link.url} > {link.anchor}</a>
                ))
              )}
            </div>
          </div>
        </div>
		</div>
	);
}

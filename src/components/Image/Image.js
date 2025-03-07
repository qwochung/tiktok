

import PropTypes from 'prop-types';
import { useState, forwardRef } from 'react';
import classNames from 'classnames';



import images from '~/assets/images';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, alt, className, fallback: customeFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customeFallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            src={fallback || src}
            alt={alt}
            ref={ref}
            {...props}
            onError={handleError}
        ></img>
    );
});


Image.propTypes= {
    src: PropTypes.string,
    alt: PropTypes.string,
    classNames: PropTypes.string,
    fallback: PropTypes.string,
    
} 

export default Image;

import PropTypes from 'prop-types';
import { useState , forwardRef} from 'react';
import images from '../../asset/img';

function Image({src,alt, ...props}, ref) {
    const [fallback, setFallback] = useState('') ;

    const handleError = () => {
        setFallback(images.noImage) ;
    }

    return  <img ref={ref} {...props } alt={alt} src={fallback || src} onError={handleError}/>;
}

Image.prototype = {
    src :PropTypes.string,
    alt :PropTypes.string,
}

export default forwardRef(Image);
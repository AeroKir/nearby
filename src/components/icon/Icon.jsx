import PropTypes from 'prop-types';
import { iconSize } from './theme';

function Icon({ size, src, additionalClasses }) {
    const classNames = `${iconSize[size]} ${additionalClasses}`

    return (
        <img src={src} className={classNames} />
    );
}

Icon.propTypes = {
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
    src: PropTypes.string.isRequired,
    additionalClasses: PropTypes.string,
};

Icon.defaultProps = {
    size: 'sm',
    additionalClasses: '',
};

export default Icon;

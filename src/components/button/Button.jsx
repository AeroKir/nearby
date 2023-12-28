import PropTypes from 'prop-types';
import { commonStyles, buttonVariant, buttonSize } from './theme';
import Icon from '../icon/Icon';

function Button({
    buttonId,
    buttonType,
    name,
    ariaLabel,
    variant,
    size,
    text,
    iconSrc,
    iconSize,
    additionalClasses,
    iconAdditionalClasses,
    onClick,
    onKeyDown,
    isDisabled,
}) {
    const classNames = `${commonStyles.common} ${buttonVariant[variant]} ${buttonSize[size]} ${additionalClasses}`;

    return (
        <button
            id={buttonId}
            type={buttonType}
            name={name}
            aria-label={ariaLabel}
            className={classNames}
            onClick={onClick}
            onKeyDown={onKeyDown}
            disabled={isDisabled}
        >
            { text }
            {variant === 'icon' ? (
                <Icon
                    src={iconSrc}
                    size={iconSize}
                    additionalClasses={iconAdditionalClasses}
                />
            ) : null
            }
        </button>
    )
}

Button.propTypes = {
    buttonId: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    buttonType: PropTypes.oneOf(['button', 'submit', 'reset']),
    name: PropTypes.string,
    ariaLabel: PropTypes.string,
    variant: PropTypes.oneOf(['transparent', 'neutral', 'accent', 'icon']),
    size: PropTypes.string,
    text: PropTypes.string,
    iconSrc: PropTypes.string,
    iconSize: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
    additionalClasses: PropTypes.string,
    iconAdditionalClasses: PropTypes.string,
    onClick: PropTypes.func,
    onKeyDown: PropTypes.func,
    isDisabled: PropTypes.bool,
};

Button.defaultProps = {
    buttonId: null,
    buttonType: 'button',
    name: null,
    ariaLabel: null,
    variant: 'transparent',
    size: '',
    text: '',
    iconSrc: '',
    iconSize: 'sm',
    additionalClasses: '',
    iconAdditionalClasses: '',
    onClick: () => {},
    onKeyDown: () => {},
    isDisabled: false,
};

export default Button;

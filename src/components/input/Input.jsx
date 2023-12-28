import { useState } from 'react';
import PropTypes from 'prop-types';
import { inputStyle } from './theme';
import Button from '../button/Button';

import showPasswordIcon from '../../assets/icons/show-pswd-icon.svg';
import hidePasswordIcon from '../../assets/icons/hide-pswd-icon.svg';

function Input({
    inputId,
    inputName,
    ariaLabel,
    inputType,
    inputValue,
    placeholder,
    style,
    additionalClasses,
    isDisabled,
    isRequired,
    onChange,
    onFocus,
    onBlur,
    ariaHasPopup,
    ariaExpanded,
    isReadOnly,
    inputTabIndex,
    error,
    endAdornment,
}) {
    const classNames = `${inputStyle[style]} ${additionalClasses}`;
    const [passwordShown, setPasswordShown] = useState(false);

    function togglePasswordVisiblity() {
        setPasswordShown(passwordShown ? false : true);
    }

    return (
        <div className="relative">
            <input
                id={inputId}
                name={inputName}
                aria-label={ariaLabel}
                type={passwordShown ? 'text' : inputType}
                value={inputValue}
                placeholder={placeholder}
                className={classNames}
                disabled={isDisabled}
                required={isRequired}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                aria-haspopup={ariaHasPopup}
                aria-expanded={ariaExpanded}
                readOnly={isReadOnly}
                tabIndex={inputTabIndex}
            />
            {inputType === 'password' ? (
                <Button
                    ariaLabel={!passwordShown ? 'Show password' : 'Hide password'}
                    variant="icon"
                    size="lg"
                    additionalClasses="absolute text-white right-0"
                    iconSrc={!passwordShown ? showPasswordIcon : hidePasswordIcon}
                    onClick={togglePasswordVisiblity}
                />
            ) : null
            }
            {endAdornment ? (
                <div className="absolute right-0 top-0">
                    {endAdornment}
                </div>
            ) : null}
            {error ? (
                <div
                    role="alert"
                    className="text-lime-100 text-xs mb-5"
                >
                    { error }
                </div>
            ) : null}
        </div>
    )
}

Input.propTypes = {
    inputId: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    inputName: PropTypes.string,
    ariaLabel: PropTypes.string,
    inputType: PropTypes.oneOf(['button', 'checkbox', 'color', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week']),
    inputValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    placeholder: PropTypes.string,
    style: PropTypes.string,
    additionalClasses: PropTypes.string,
    togglePasswordVisibility: PropTypes.func,
    isDisabled: PropTypes.bool,
    isRequired: PropTypes.bool,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    ariaHasPopup: PropTypes.string,
    ariaExpanded: PropTypes.bool,
    isReadOnly: PropTypes.bool,
    inputTabIndex: PropTypes.number,
    error: PropTypes.string,
    endAdornment: PropTypes.node,
};

Input.defaultProps = {
    inputId: null,
    inputName: null,
    ariaLabel: null,
    inputType: 'text',
    inputValue: '',
    placeholder: '',
    style: 'common',
    additionalClasses: '',
    togglePasswordVisibility: () => {},
    isDisabled: false,
    isRequired: false,
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
    ariaHasPopup: 'false',
    ariaExpanded: false,
    isReadOnly: false,
    inputTabIndex: 0,
    error: '',
    endAdornment: null,
};

export default Input;

import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../input/Input';
import Button from '../button/Button';
import generateKey from '../../utils/generateKey';
import useOnClickOutside from '../../hooks/useOnClickOutside';

import arrowIcon from '@/assets/icons/arrow-down-icon.svg';

function Select({
    optionsList,
    selectAriaLabel,
    onChange,
    optionKey,
 }) {
    const selectRef = useRef();
    const [isOptionsOpen, setIsOptionsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(0);

    const optionsListClasses = 'absolute block w-full bg-coal-100 rounded-lg mt-1 p-4 z-10';

    useOnClickOutside(selectRef, () => {
        setIsOptionsOpen(false);
    })

    function expandOptions() {
        setIsOptionsOpen(true);
    }

    function toggleOptions() {
        setIsOptionsOpen(!isOptionsOpen);
    }

    function setSelectedThenCloseDropdown(index) {
        setSelectedOption(index);
        setIsOptionsOpen(false);
        onChange(optionsList[index]);
    }

    const handleKeyboardSelect = (index) => (e) => {
        switch (e.key) {
            case ' ':
            case 'SpaceBar':
            case 'Enter':
                e.preventDefault();
                setSelectedThenCloseDropdown(index);
                break;

            default:
                break;
        }
    }

    function handleListKeyDown(e) {
        switch (e.key) {
            case 'Escape':
                e.preventDefault();
                setIsOptionsOpen(false);
                break;
            case 'ArrowUp':
                e.preventDefault();
                setSelectedOption(
                    selectedOption - 1 >= 0 ? selectedOption - 1 : optionsList.length - 1
                );
                break;
            case 'ArrowDown':
                e.preventDefault();
                setSelectedOption(
                    selectedOption === optionsList.length - 1 ? 0 : selectedOption + 1
                );
                break;
            default:
                break;
        }
    }

    return (
        <div
            ref={selectRef}
            className="relative"
        >
            <Input
                ariaHasPopup={'listbox'}
                ariaExpanded={isOptionsOpen}
                ariaLabel={selectAriaLabel}
                inputTabIndex={-1}
                inputValue={typeof optionsList[selectedOption] === 'object' ? optionsList[selectedOption][optionKey] : optionsList[selectedOption]}
                onFocus={expandOptions}
                isReadOnly
                endAdornment={
                    <Button
                        ariaLabel={!isOptionsOpen ? 'Show options list' : 'Hide options list'}
                        variant="icon"
                        size="lg"
                        iconSize="md"
                        iconSrc={arrowIcon}
                        onClick={toggleOptions}
                        onKeyDown={handleListKeyDown}
                        iconAdditionalClasses={isOptionsOpen ? 'rotate-180 transition-all' : 'transition-all'}
                    />
                }
            />

            <ul
                role="listbox"
                tabIndex={-1}
                className={isOptionsOpen ? optionsListClasses : 'hidden'}
            >
                {optionsList.map((option, index) => (
                    <li
                        key={generateKey()}
                        role="option"
                        aria-selected={selectedOption === index}
                        tabIndex={0}
                        className="text-white cursor-pointer transition-all hover:text-sky-300 focus:text-sky-300 active:text-sky-300 aria-selected:text-sky-300"
                        onClick={() => setSelectedThenCloseDropdown(index)}
                        onKeyDown={handleKeyboardSelect(index)}
                        value={typeof option === 'object' ? option[optionKey] : option}
                    >
                        { typeof option === 'object' ? option[optionKey] : option }
                    </li>
                ))}
            </ul>
        </div>
    )
}

Select.propTypes = {
    optionsList: PropTypes.array,
    selectAriaLabel: PropTypes.string,
    onChange: PropTypes.func,
    optionKey: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
};

Select.defaultProps = {
    optionsList: [],
    selectAriaLabel: 'Select',
    onChange: () => {},
    optionKey: '',
};

export default Select;

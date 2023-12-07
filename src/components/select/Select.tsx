import {useEffect, useState} from "react";
import { RiArrowDownSFill } from "react-icons/ri";
import {SelectProps, SelectOptions, StyleProps} from "./Select.types";
import {ModalPortal} from "../ReactPortal";

import {
  SelectValue,
  DropdownMenu,
  ArrowContainer,
  SelectContainer,
  DropdownMenuOption,
  SelectValueContainer,
} from "./Select.elements";


export const Select =  ({
                           title,
                           value,
                           options,
                           onChange,
                           containerStyle,
                           valueContainerStyle,
                           arrowContainerStyle,
                           dropdownMenuStyle,
                           dropdownMenuOptionStyle,
                         }: SelectProps & StyleProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const dropdownMenuOptionClickHandler = (value: SelectOptions["value"]) => {
    onChange(value);
    setIsOpen(false);
  };

  const calculateDropdownPosition = () => {
    const selectValueContainer = document.getElementById("selectValueContainer");

    if (selectValueContainer) {
      const rect = selectValueContainer.getBoundingClientRect();
      setPosition({ top: rect.bottom, left: rect.left });
    }
  };

  useEffect(() => {
    if (isOpen) {
      calculateDropdownPosition();
      window.addEventListener("scroll", calculateDropdownPosition);

      return () => {
        window.removeEventListener("scroll", calculateDropdownPosition);
      };
    }
  }, [isOpen]);

  const getTitleByValue = (value: SelectOptions["value"]) => {
    const result = options.find((option) => option.value === value);

    if (result) return result.value;

    return "";
  };

  return (
    <SelectContainer style={containerStyle}>
      <SelectValueContainer
        id="selectValueContainer"
        style={valueContainerStyle}
        onClick={() => setIsOpen(!isOpen)}
      >
        <SelectValue>{value ? getTitleByValue(value) : title}</SelectValue>
        <ArrowContainer $isOpen={isOpen} style={arrowContainerStyle}>
          <RiArrowDownSFill />
        </ArrowContainer>
      </SelectValueContainer>
      {isOpen && options && (
        <ModalPortal>
          <DropdownMenu style={{ ...dropdownMenuStyle, ...position }}>
            {options.map((option) => (
              <DropdownMenuOption
                key={option.value}
                style={dropdownMenuOptionStyle}
                onClick={() => dropdownMenuOptionClickHandler(option.value)}
              >
                {option.value}
              </DropdownMenuOption>
            ))}
          </DropdownMenu>
        </ModalPortal>
      )}
    </SelectContainer>
  );
};

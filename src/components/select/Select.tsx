import { useState } from "react";
import { RiArrowDownSFill } from "react-icons/ri";

import { ModalPortal } from "../ReactPortal";
import {
  SelectValue,
  DropdownMenu,
  ArrowContainer,
  SelectContainer,
  DropdownMenuOption,
  SelectValueContainer,
} from "./Select.elements";
import { SelectProps, SelectOptions } from "./Select.types";

export const Select = ({ title, value, options, onChange }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownMenuOptionClickHandler = (value: SelectOptions["value"]) => {
    onChange(value);
    setIsOpen(false);
  };

  const getTitleByValue = (value: SelectOptions["value"]) => {
    const result = options.find((option) => option.value === value);

    if (result) return result.value;

    return "";
  };

  return (
    <SelectContainer>
      <SelectValueContainer onClick={() => setIsOpen(!isOpen)}>
        <SelectValue>{value ? getTitleByValue(value) : title}</SelectValue>
        <ArrowContainer $isOpen={isOpen}>
          <RiArrowDownSFill />
        </ArrowContainer>
      </SelectValueContainer>
      {isOpen && options && (
        <ModalPortal>
          <DropdownMenu>
            {options.map((option) => (
              <DropdownMenuOption
                key={option.value}
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

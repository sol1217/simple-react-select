import styled, { css } from "styled-components";

export const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  gap: 8px;
`;

export const SelectValueContainer = styled.div`
  border: 1px solid rgba(40, 44, 52, 0.45);
  padding: 5px 16px;
  cursor: pointer;
  min-width: 110px;
  display: grid;
  grid-template-columns: 1fr 20px;
  align-items: center;
  gap: 5px;
  border-radius: 20px;
`;

export const SelectValue = styled.div`
  font-size: 18px;
  user-select: none;
`;

export const ArrowContainer = styled.div<{ $isOpen: boolean }>`
  width: 25px;
  height: 30px;
  font-size: 30px;
  user-select: none;
  transform-origin: 40% 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-behavior: unset;

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      transform: rotateZ(180deg);
    `}
`;

export const DropdownMenu = styled.div`
  padding: 6px 0;
  width: 142px;
  border-radius: 10px;
  box-shadow: 1px 1px 9px 0 rgba(0, 0, 0, 0.34);
  -webkit-box-shadow: 1px 1px 9px 0 rgba(0, 0, 0, 0.37);
  -moz-box-shadow: 1px 1px 9px 0 rgba(0, 0, 0, 0.4);
`;

export const DropdownMenuOption = styled.div`
  font-size: 16px;
  max-height: 200px;
  margin-bottom: 4px;
  padding: 6px 10px;
  user-select: none;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

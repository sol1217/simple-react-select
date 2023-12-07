import React from "react";

export type SelectOptions = {
  title: string
  value: string
}

export type SelectProps = {
  title: string
  value: SelectOptions['value']
  options: SelectOptions[]
  onChange: (value: SelectOptions['value']) => void
}

export interface StyleProps {
  containerStyle?: React.CSSProperties;
  valueContainerStyle?: React.CSSProperties;
  arrowContainerStyle?: React.CSSProperties;
  dropdownMenuStyle?: React.CSSProperties;
  dropdownMenuOptionStyle?: React.CSSProperties;
}

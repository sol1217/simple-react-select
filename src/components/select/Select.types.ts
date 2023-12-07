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

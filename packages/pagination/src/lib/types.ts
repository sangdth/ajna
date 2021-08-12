// obtained from 'react-icons' library types
type IconBaseProps = {
  children?: React.ReactNode
  size?: string | number
  color?: string
  title?: string
} & React.SVGAttributes<SVGElement>

export type SeparatorPosition = "left" | "right"

export type IconType = (props: IconBaseProps) => JSX.Element

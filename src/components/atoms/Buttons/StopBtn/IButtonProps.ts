import { type IButton } from '../IButton'

export interface IButtonProps extends IButton {
  isDisable: boolean
  text: string
}

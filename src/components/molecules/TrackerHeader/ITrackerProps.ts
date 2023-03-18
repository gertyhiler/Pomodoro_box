import { type ITextProps } from '../../atoms/Text/ITextProps'

export interface ITrackerHeaderProps extends Pick<ITextProps, 'text'> {
  trackerCounter: number
}

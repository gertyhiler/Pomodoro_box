import React, { type FC } from 'react'
import { useSwitcherState } from '../Switcher/state'

export const SwitcherLightSvg: FC = () => {
  const { isLight } = useSwitcherState(state => state)
  return (
    <svg
    width='16px'
    height='16px'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={`transition-opacity absolute ${isLight ? 'opacity-100' : 'opacity-0'}`}
  >
    <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
    <g
      id='SVGRepo_tracerCarrier'
      strokeLinecap='round'
      strokeLinejoin='round'
    ></g>
    <g id='SVGRepo_iconCarrier'>
      {' '}
      <path
        d='M12 7C9.23858 7 7 9.23858 7 12C7 13.3613 7.54402 14.5955 8.42651 15.4972C8.77025 15.8484 9.05281 16.2663 9.14923 16.7482L9.67833 19.3924C9.86537 20.3272 10.6862 21 11.6395 21H12.3605C13.3138 21 14.1346 20.3272 14.3217 19.3924L14.8508 16.7482C14.9472 16.2663 15.2297 15.8484 15.5735 15.4972C16.456 14.5955 17 13.3613 17 12C17 9.23858 14.7614 7 12 7Z'
        stroke='#ffffff'
        strokeWidth='2'
      ></path>{' '}
      <path
        d='M12 4V3'
        stroke='#ffffff'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></path>{' '}
      <path
        d='M18 6L19 5'
        stroke='#ffffff'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></path>{' '}
      <path
        d='M20 12H21'
        stroke='#ffffff'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></path>{' '}
      <path
        d='M4 12H3'
        stroke='#ffffff'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></path>{' '}
      <path
        d='M5 5L6 6'
        stroke='#ffffff'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></path>{' '}
      <path
        d='M10 17H14'
        stroke='#ffffff'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></path>{' '}
    </g>
  </svg>
  )
}

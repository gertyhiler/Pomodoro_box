import React, { type FC } from 'react'
import { useSwitcherState } from './state/useSwitcherState'

export const Switcher: FC = () => {
  const { isLight, setIsLight } = useSwitcherState(state => state)
  const toggleClass: string = 'transform translate-x-5'
  return (
    <>
      <div
        className='md:w-14 md:h-7 w-12 h-6 flex items-center bg-color-c4 rounded-full p-1 cursor-pointer'
        onClick={() => {
          setIsLight(!isLight)
        }}
      >
        {/* Switch */}
        <div
          className={`bg-primary md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out relative flex justify-center items-center ${
            isLight ? '' : toggleClass
          }`}
        >
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
          <svg
            width={16}
            height={16}
            viewBox='0 0 32 32'
            xmlns='http://www.w3.org/2000/svg'
            fill='#000000'
            className={`transition-opacity absolute ${isLight ? 'opacity-0' : 'opacity-100'}`}
          >
            <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
            <g
              id='SVGRepo_tracerCarrier'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></g>
            <g id='SVGRepo_iconCarrier'>
              {' '}
              <g id='Lager_94' data-name='Lager 94' transform='translate(0)'>
                {' '}
                <path
                  id='Path_70'
                  data-name='Path 70'
                  d='M12.516,4.509A12,12,0,0,0,22.3,19.881,12.317,12.317,0,0,0,24,20a11.984,11.984,0,0,0,3.49-.514,12.1,12.1,0,0,1-9.963,8.421A12.679,12.679,0,0,1,16,28,12,12,0,0,1,12.516,4.509M16,0a16.5,16.5,0,0,0-2.212.15A16,16,0,0,0,16,32a16.526,16.526,0,0,0,2.01-.123A16.04,16.04,0,0,0,31.85,18.212,16.516,16.516,0,0,0,32,15.944,1.957,1.957,0,0,0,30,14a2.046,2.046,0,0,0-1.23.413A7.942,7.942,0,0,1,24,16a8.35,8.35,0,0,1-1.15-.08,7.995,7.995,0,0,1-5.264-12.7A2.064,2.064,0,0,0,16.056,0Z'
                  fill='#fff'
                ></path>{' '}
              </g>{' '}
            </g>
          </svg>
        </div>
      </div>
    </>
  )
}

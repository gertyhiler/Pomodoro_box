import React, { useEffect, useRef, useState, type FC } from 'react'
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import { useAnalyticChart } from '../../../store/analyticChart/useAnalyticChart'
import { convertMinutesTomatoToString } from '../../../utils/convertMinutesTomatoToString'
import { type IAxisClickEvent } from './IAxisClickEvent'
import './style.css'
import { useChartData } from './useChartData'
import { convertSecondToMinutes } from '../../../utils/convertSecondToMinutes'
import { createStringDate } from '../../../utils/createStringDate'

export const AnalyticRechart: FC = () => {
  const chartWrapperRef = useRef<HTMLDivElement>(null)
  const data = useChartData()
  const { setCurrentWeekDay, weekDays } = useAnalyticChart(state => state)
  const [activeIndex, setActiveIndex] = useState(weekDays.indexOf(createStringDate()))

  function coloredSelectTick (color: string): void {
    if (chartWrapperRef === null) return
    if (chartWrapperRef.current === null) return
    if (chartWrapperRef.current.querySelectorAll('.xAxis > .recharts-cartesian-axis-ticks > .recharts-layer.recharts-cartesian-axis-tick').length === 0) return
    if (typeof chartWrapperRef.current.querySelectorAll('.xAxis > .recharts-cartesian-axis-ticks > .recharts-layer.recharts-cartesian-axis-tick')[activeIndex] === 'undefined') return
    if (chartWrapperRef.current.querySelectorAll('.xAxis > .recharts-cartesian-axis-ticks > .recharts-layer.recharts-cartesian-axis-tick')[activeIndex].lastChild === null) return
    const ticksList: NodeListOf<SVGGElement> = chartWrapperRef?.current?.querySelectorAll('.xAxis > .recharts-cartesian-axis-ticks > .recharts-layer.recharts-cartesian-axis-tick')
    const SVGText = ticksList[activeIndex].children[0]
    if (typeof SVGText === 'undefined') return
    SVGText.setAttribute('fill', color)
  }
  function handleBarClick (e: { name: string }): void {
    coloredSelectTick('#666')
    data.forEach((item, index) => {
      if (item.name === e.name) {
        setActiveIndex(index)
        setCurrentWeekDay(index)
      }
    })
  }

  function handleXAxisTickClick (index: number): void {
    coloredSelectTick('#666')
    setActiveIndex(index)
    setCurrentWeekDay(index)
  }

  useEffect(() => {
    coloredSelectTick('#DC3E22')
    if (useAnalyticChart.getState().currentWeekDay === useAnalyticChart.getState().weekDays[activeIndex]) return
    setCurrentWeekDay(activeIndex)
  }, [activeIndex])

  useEffect(() => {
    coloredSelectTick('#666')
    setCurrentWeekDay(activeIndex)
  }, [useAnalyticChart.getState().weekDays])

  return (
    <div className='w-full h-full' ref={chartWrapperRef}>

    <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={data}>
          <CartesianGrid strokeDasharray="44 0" vertical={false}/>
          <XAxis dataKey="name" tickLine={false} axisLine={false} onClick={(e: IAxisClickEvent) => { handleXAxisTickClick(e.index) }} tick={{ fontSize: 24 }} tickSize={20} height={50}/>

          <Bar dataKey="uv" fill="#EA8A79" onClick={handleBarClick} >
            {data.map((entry, index) => {
              if (entry.uv === 0) return <Cell cursor="pointer" height={-10} fill={'#C4C4C4'} key={`cell-${index}`} />
              if (index === activeIndex) {
                coloredSelectTick('#DC3E22')
              }
              return <Cell cursor="pointer" fill={index === activeIndex ? '#DC3E22' : '#EA8A79'} key={`cell-${index}`} />
            })}
          </Bar>
          <YAxis tickCount={6} orientation='right' interval={1} tickLine={false} axisLine={false} tickFormatter={(v) => convertMinutesTomatoToString(convertSecondToMinutes(v)) } height={70} tickSize={20}/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

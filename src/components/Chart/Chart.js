import React from 'react'
import CharBar from './CharBar'
import './Chart.css'
function Chart(props) {
    const dataPointValue=props.dataPoints.map(dataPont =>dataPont.value)
    const totalMax =Math.max(...dataPointValue)
  return (
    <div className='chart'>
        {props.dataPoints.map(dataPoint =>( 
         <CharBar
         key={Math.random()}
         value={dataPoint.value} 
         maxValue={totalMax}
         label={dataPoint.label}
           />)
      )}
    </div>
  )
}

export default Chart
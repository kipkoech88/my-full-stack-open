import React from 'react'
import Part1 from './Part1'
import Part2 from './Part2'
import Part3 from './Part3'

function Content({part1,part2,part3, exercise1,exercise2,exercise3}) {
  return (
    <div> 
        <Part1 part1={part1} exercise1={exercise1} />
        <Part2 part2={part2} exercise2={exercise2} />
        <Part3 part3={part3} exercise3={exercise3} />
        
      
      
    </div>
  )
}

export default Content
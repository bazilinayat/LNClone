import React from 'react'
import './InputOptions.css'

function InputOption({ title, Icon, colour }) {
  return (
    <div className='inputOption'>
        <Icon style={{color: colour}} />
        <h4>{title}</h4>
    </div>
  )
}

export default InputOption

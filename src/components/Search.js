import React, {useContext, useState} from 'react'
import { AlertContext } from '../context/alert/alertContext'

export const Search = () => {
  
  const [value, setValue] = useState('')

  const {show} = useContext(AlertContext)

  const onSubmit = event => {
    if (event.key !== 'Enter') {
      return
    }

    if (value.trim()) {
      console.log('Make request with: ', value)
    } else {
      show('Enter user nickname')
    }
  }

  return (
    <div className="form-group">
      <input 
        type="text"
        className="form-control"
        placeholder="Enter users nickname"
        value={value}
        onChange={event => setValue(event.target.value)}
        onKeyPress={onSubmit}
      />
    </div>
  )
}
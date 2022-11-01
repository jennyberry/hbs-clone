import {useState} from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import React from 'react'
import { v4 as uuidv4 } from 'uuid';
const DropdownBox = ({selected, setSelected}) => {
    const [isOpen, setOpen] = useState(false)
    const currencyOption = ["$AUD","$USD","VND"]
  return (
      <div className='dropdown'>
          <div className='dropdown-btn' onClick={()=> setOpen(pre => !pre)}>
              {selected}
             {isOpen ? (<div><BsChevronUp/></div>) : (<div><BsChevronDown/></div>)}
          </div>
          {isOpen && (<div className='dropdown-content'>
              {currencyOption.map((option) => (
                  <ul
                  className='dropdown-item'>
                      <li key={uuidv4}
                       onClick={e => {
                        setSelected(option);
                        setOpen(!open)}} >
                          {option}
                      </li>
                 </ul>
                  ))}
      </div>)}

      </div>

  )
}

export default DropdownBox

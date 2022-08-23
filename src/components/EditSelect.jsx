import React from 'react'

function EditSelect({name, itemone, value, itemtwo, itemthree, handleChange, edit}) {
  return (
    <select className='input-space' value={value} name={name} onChange={handleChange} data-testid={edit}>
      <option value=''>Select {name}</option>
      <option value={itemone}>{itemone}</option>
      <option value={itemtwo}>{itemtwo}</option>
      <option value={itemthree}>{itemthree}</option>
    </select>
  )
}

export default EditSelect
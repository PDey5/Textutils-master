import React from 'react'

export default function Alert(props) {
  return (
  props.alert && <div className="alert alert-success alert-dismissible fade show position-absolute w-100 p-1" role="alert">
  <strong>{props.alert.type}</strong>{props.alert.message}
  <button type="button" className='btn' data-bs-dismiss="alert" aria-label=""></button>
</div>

  )
}
import React from 'react'
import Form from '../Form'
import { useNavigate } from 'react-router-dom'

const Confirmation = ({data,func,submition}) => {

  const navigate=useNavigate()

  const formData=[
    {
      label: "Confirmation Date",
      name: "confirmation.date",
      value: data.date,
      placeholder:"dd/mm/yyyy",
      change: func
    },
    {
      label: "Confirmation Place",
      name: "confirmation.place",
      value: data.place,
      type: "text",
      change: func
    },
    {
      label: "Confirmed By (Bishop)",
      name: "confirmation.bishop",
      value: data.bishop,
      type: "text",
      change: func
    }
  ]


  
  return (
    <>
      <Form 
      uniqueId={3}
    formTitle={"Confirmation Details"} 
    data={formData}
    btnLabel={"Submit"}
    submit={submition}
    />
    </>
  )
}

export default Confirmation
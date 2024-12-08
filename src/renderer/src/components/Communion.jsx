import React from 'react'
import Form from '../Form'
import { useNavigate } from 'react-router-dom'

const Communion = ({data,func}) => {

  const navigate=useNavigate()

  const formData=[
    {
      label: "Communion Date",
      name: "communion.date",
      value: data.date,
      placeholder:"dd/mm/yyyy",
      change: func
    },
    {
      label: "Communion Place",
      name: "communion.place",
      value: data.place,
      type: "text",
      change: func
    },
    {
      label: "Communion Ministers",
      name: "communion.ministers",
      value: data.ministers,
      type: "text",
      change: func
    },
  
  ]


  const handleSubmit=(e)=>{
    e.preventDefault()
    navigate("/marriage")
  }
  return (
    <>
      <Form 
      uniqueId={2}
    formTitle={"Communion Details"} 
    data={formData}
    btnLabel={"Next"}
    submit={handleSubmit}
    />
    </>
  )
}

export default Communion
import React from 'react'
import Form from '../Form'
import { useNavigate } from 'react-router-dom'

const Parents = ({data,func}) => {

  const navigate=useNavigate()

  const formData=[
    {
      label: "Father's Name",
      name: "parents.fname",
      value: data.fname,
      type: "text",
      change: func
    },
    {
      label: "Father's Nationality",
      name: "parents.fnation",
      value: data.fnation,
      type: "text",
      change: func
    },
    {
      label: "Father's Domicile",
      name: "parents.fdomicile",
      value: data.fdomicile,
      type: "text",
      change: func
    },
    {
      label: "Father's Occupation",
      name: "parents.foccupation",
      value: data.foccupation,
      type: "text",
      change: func
    },
    {
      label: "Mother's Name",
      name: "parents.mname",
      value: data.mname,
      type: "text",
      change: func
    },
  ]

  const handleSubmit=(e)=>{
    e.preventDefault()
    navigate("/godparents")
  }
  return (
    <>
    <Form 
    uniqueId={6}
    formTitle={"Parents Details"} 
    data={formData}
    btnLabel={"Next "}
    submit={handleSubmit}
    />
    </>
    
  )
}

export default Parents
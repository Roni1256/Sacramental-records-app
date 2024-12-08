import React from 'react'
import Form from '../Form'
import { useNavigate } from 'react-router-dom'

const Marriage = ({data,func}) => {

  const navigate=useNavigate()

  const formData=[
    {
      label: "Marriage Date",
      name: "marriage.date",
      value: data.date,
      placeholder:"dd/mm/yyyy",
      change: func
    },
    {
      label: "Marriage Place",
      name: "marriage.place",
      value: data.place,
      type: "text",
      change: func
    },
    {
      label: "Witness 1",
      name: "marriage.witness1",
      value: data.witness1,
      type: "text",
      change: func
    },
    {
      label: "Witness 2",
      name: "marriage.witness2",
      value: data.witness2,
      type: "text",
      change: func
    },
    {
      label: "Minister of Marriage",
      name: "marriage.minister",
      value: data.minister,
      type: "text",
      change: func
    },
  
  ]


  const handleSubmit=(e)=>{
    e.preventDefault()
    navigate("/confirmation")
  }
  return (
    <>
      <Form 
      uniqueId={5}
    formTitle={"Marriage Details"} 
    data={formData}
    btnLabel={"Next "}
    submit={handleSubmit}
    />
    </>
  )
}

export default Marriage
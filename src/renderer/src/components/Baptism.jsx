import React from 'react'
import Form from '../Form'
import { useNavigate } from 'react-router-dom'
import { MdNextPlan } from 'react-icons/md'


const Baptism = ({data,func}) => {
  const navigate=useNavigate()
  const formData=[
    {
      label:"Date of Baptism",
      name:"baptism.date",
      value:data.date,
      placeholder:"dd/mm/yyyy",
      change:func
    },
    {
      label:"Place of Baptism",
      name:"baptism.place",
      value:data.place,
      type:"text",
      change:func
    },
    {
      label:"Baptism Minister's Name",
      name:"baptism.minister",
      value:data.minister,
      type:"text",

      change:func
    },
    {
      label:"Baptism Name",
      name:"baptism.name",
      value:data.name,
      change:func
    },
    {
      label:"Signature od P.P",
      name:"baptism.signature",
      value:data.signature,
      change:func
    },
    {
      label:"Remarks",
      name:"baptism.remark",
      value:data.remark,
      change:func
    },

  ]

  const handleSubmit=(e)=>{
    e.preventDefault()
    navigate("/personals")
  }
  
  return (
    <>
    
      <Form 
      uniqueId={1}
      formTitle={"Baptism Details"} 
      data={formData}
      btnLabel={`Next `}
      submit={handleSubmit}
      />
    </>
  )
}

export default Baptism
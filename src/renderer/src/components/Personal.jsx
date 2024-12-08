import React from 'react'
import { useNavigate } from 'react-router-dom'
import Form from '../Form'
const Personal = ({data,func}) => {
  const navigate=useNavigate()

  const formData=[
    {
      label:"Date of Birth",
      name:"personal.dob",
      value:data.date,
      placeholder:"dd/mm/yyyy",
      change:func
    },
    {
      label:"Sex",
      name:"personal.sex",
      value:data.sex,
      type:"select",
      defaultValue:"Choose gender",
      options:[
        {
          value:"m",
          label:"male"
        },
        {
          value:"f",
          label:"female"
        },
        {
          value:"o",
          label:"others"
        }
      ],
      change:func
    },
    {
      label:"Name",
      name:"personal.name",
      value:data.name,
      change:func
    },
    {
      label:"Surname",
      name:"personal.surname",
      value:data.surname,
      change:func
    }

  ]

  const handleSubmit=(e)=>{
    e.preventDefault()
    navigate("/parents")
  }
  return (
    <>
    
    <Form 
    uniqueId={7}
    formTitle={"Personal Details"} 
    data={formData}
    btnLabel={"Next"}
    submit={handleSubmit}
    />
  </>
  )
}

export default Personal
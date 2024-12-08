import React from 'react'
import Form from '../Form'
import { useNavigate } from 'react-router-dom'

const GodParents = ({data,func}) => {

  const navigate=useNavigate()

  const formData=[
    {
      label: "Godfather's Name",
      name: "godparents.gfname",
      value: data.gfname,
      type: "text",
      change: func
    },
    {
      label: "Godfather's Surname",
      name: "godparents.gfsurname",
      value: data.gfsurname,
      type: "text",
      change: func
    },
    {
      label: "Godfather's Domicile",
      name: "godparents.gfdomicile",
      value: data.gfdomicile,
      type: "text",
      change: func
    },
    {
      label: "Godmother's Name",
      name: "godparents.gmname",
      value: data.gmname,
      type: "text",
      change: func
    },
    {
      label: "Godmother's Surname",
      name: "godparents.gmsurname",
      value: data.gmsurname,
      type: "text",
      change: func
    },
    {
      label: "Godmother's Domicile",
      name: "godparents.gmdomicile",
      value: data.gmdomicile,
      type: "text",
      change: func
    },

  ]


  const handleSubmit=(e)=>{
    e.preventDefault()
    navigate("/communion")
  }
  return (
    <>
      <Form 
      uniqueId={4}
    formTitle={"GodParents Details"} 
    data={formData}
    btnLabel={"Next"}
    submit={handleSubmit}
    />
    </>
  )
}

export default GodParents
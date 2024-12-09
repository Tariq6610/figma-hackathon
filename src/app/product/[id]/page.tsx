import React from 'react'
import Detail from '@/components/Detail'


interface Props {
  params : {
    id : string
  }
}
const page = ({params} : Props) => {
  const id = Number(params.id)
  console.log("params =>", params);
  
  return (
  <Detail id={id} />
  )
}

export default page
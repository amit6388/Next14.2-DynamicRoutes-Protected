import React from 'react'

const page = ({params}: {
    params:{bolgId:string}
}) => {
  return (
    <div>
      {params?.bolgId}
    </div>
  )
}

export default page


import dynamic from 'next/dynamic';
import React from 'react'

const Content = dynamic(() => import("./_components/DynamicContent"), {
  ssr: false,
  loading: () =><div
  id="content"
  className="h-[600px]"></div>,});
const page = () => {

  return (
    <div><Content/></div>
  )
}

export default page




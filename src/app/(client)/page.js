import dynamic from 'next/dynamic';
import React from 'react'

const Content = dynamic(() => import("./_components/DynamicContent"), {
  ssr: true,
  loading: () =><div
  id="content"
  className="h-[700px]"></div>,});


export default async function Home() {
  return (
    <>
    <Content/>
    </>
  );
}

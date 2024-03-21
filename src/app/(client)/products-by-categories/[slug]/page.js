'use client'
import ProductCard from '@/components/ProductCard';
import { useSWRData } from '@/library/api';
import Link from 'next/link';
import React ,{ useRef, useState }from 'react'
const ProductsByCategories = ({params}) => {
const { slug } = params;
// const id = slug.split("-")[slug.split("-").length - 1];
    const { data: id } = useSWRData(`/api/categories?category_code=${slug}`);
    const { data: categories } = useSWRData(`/api/categories?parent=${id?.data[0]?.id}`);
    const [active, setActive] = useState(null);
    const divRefs = useRef([]);
    const handleClickAndScroll = (i) => {
      setActive(i);
      const targetDiv = divRefs.current[i];
      if (targetDiv) {
        // targetDiv.scrollIntoView({behavior: 'smooth'});
        // targetDiv.scrollIntoView();
        // window.scrollBy(0, -100)
      }
    };
  return (
    <div className="my-10 w-full m-auto max-w-xs md:max-w-3xl lg:max-w-7xl">
      <div className='text-center text-3xl font-bold mb-8'>{id?.data[0]?.name}</div>
      <div className='grid grid-cols-4' >
        {/* <div className='col-span-1 '>
          <div className='fixed'>
        {categories?.data?.map((category,i) => (
          <div key={i} className={` flex flex-col cursor-pointer my-3 font-semibold ${active === i ? ' text-primary' : ''}`} onClick={() => handleClickAndScroll(i)}>
          {category.name}
            </div>
        ))}
          </div>
        </div> */}
        <div className='col-span-4 md:col-span-4'>
      {categories?.data?.map((category,i) => (
        <div key={i} ref={el => divRefs.current[i] = el} className='mb-8'>
        <div className='mb-2'>
          <Link className='text-2xl font-bold hover:text-primary text-black py-4 no-underline' href={`/danh-muc-san-pham/${category?.category_code}`}>
          {category.name}
          </Link>
        </div>
        <div className="border grid grid-cols-12  gap-2 md:gap-4 lg:gap-8">
        {category?.products?.map((product,j) => (
          <div key={j}  className="col-span-12 md:col-span-4 lg:col-span-3  "><ProductCard data={product} key={j} /></div>
        ))}
         </div>
        </div>
      ))}
      </div>
        </div>

    </div>
  )
}

export default ProductsByCategories


import React, { useContext, useEffect, useState } from 'react'
import CartStore from '../store/CartStore';

const Products = () => {
  let ctx = useContext(CartStore);
  console.log(ctx)


  const [arr, setarr] = useState([])
  async function  getdata() {
    let res = await fetch("https://dummyjson.com/products");
    let data = await res.json()
    setarr(data.products)
  }

  useEffect(()=>{
    getdata()
  },[])

  // console.log(arr)


  return (
    <div>
      <section className="bg-gray-50 py-8 antialiased md:py-12">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          {/* Heading & Filters */}
          <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
            <div>
              <h2 className="mt-3 text-xl font-semiboldsm:text-2xl">Electronics</h2>
            </div>
          </div>
          <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
            {
              arr.map((ele,i)=>{
                return (
                  <div key={ele.thumbnail} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm ">
                    <div className="h-56 w-full">
                      <a href="#">
                        <img
                          className="mx-auto hidden h-full dark:block"
                          src={ele.thumbnail}
                          alt
                        />
                      </a>
                    </div>
                    <div className="pt-6">
                        <p className=' font-serif'>{ele.title}</p>
                      <div className="mt-4 flex items-center justify-between gap-4">
                        <p className="text-2xl font-extrabold leading-tight text-gray-900   ">
                          $1,699
                        </p>
                        <button
                         onClick={()=>ctx.AddtoCart(ele,i)}
                          type="button"
                          className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium border border-gray-300 hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                          <svg
                            className="-ms-2 me-2 h-5 w-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                            />
                          </svg>
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            }
           
          </div>
        </div>
     
      </section>
    </div>
  )
}

export default Products
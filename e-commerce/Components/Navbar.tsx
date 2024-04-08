// "use client"

import Image from "next/image";
import images from "../public/Image/logo.png"
import { FiShoppingBag } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { usePathname, useSearchParams } from 'next/navigation'
import Link from "next/link";

export default function NavBar() {

  const pathname = usePathname()
  // const currentPath = router.pathname;
  const isEditRoute = pathname.includes('/Edit');
  console.log(pathname) 
  return (
    <>



      {isEditRoute ?
        <div className=" flex flex-col border-e-2  ">
          <div className=" border-b-2 w-full justify-center px-6 py-3">

           <Link href={"/Edit/CardPost"}>
           
           <p className="ps-3">Card Post </p>
           </Link> 
          </div>
          <div className=" border-b-2 w-full justify-center px-6 py-3">
            <p className="ps-3">Slider Post </p>
          </div>
        </div>



        :
        <>

          <div className="h-44 bg-[#faf273] flex justify-around items-center ">
            <div>
              <Image
                src={images}
                width={220}
                height={220}
                alt="Picture of the author"
              />
            </div>


            <div className="flex">

              <div className="rounded-s-lg  flex">
                <select name="" id="" className="p-3 bg-white border-2 rounded-s-lg border-[#f2f2f2] border-solid" >
                  <option value="">All</option>
                </select>
                <input type="text" className="w-[35rem] bg-white border-y-2" />
              </div>
              <button className="px-3 bg-[#fcb700] border-[#fcb700] rounded-e-lg">Search</button>
            </div>
            <FiShoppingBag size={32} />
            <div>
              <FaRegUser size={32} />
            </div>
            <div>

            </div>
          </div>


        </>
      }




    </>

  )
}
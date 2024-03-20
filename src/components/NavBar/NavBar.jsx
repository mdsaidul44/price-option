import { useState } from "react";
import Link from "../Link/Link";
import { HiMenuAlt1 } from 'react-icons/hi';
import { AiOutlineClose } from "react-icons/ai";

 

 

const NavBar = () => {
    const [open,setOpen] = useState(false)
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/dashboard', name: 'Dashboard' }
      ];
      
    return (
        <nav className="bg-black p-6">
           <div className="md:hidden text-2xl " onClick={()=>setOpen(!open)}>
            {
                open === true ?
                 <AiOutlineClose></AiOutlineClose> : 
                 <HiMenuAlt1 className=""></HiMenuAlt1>

            } 
           </div>
           <ul className={`md:flex absolute md:static duration-1000
           ${open ? 'top-16': '-top-60'}
           bg-black px-6`}>
           {
                routes.map(route=> <Link key={route.id} route={route}></Link> )
            }
           </ul>
            {/* another navbar
          <div className="bg-black p-6">
            <div className="md:hidden text-2xl" onClick={()=> setOpen(!open)}>
                {
                    open === true? <AiOutlineClose></AiOutlineClose> : 
                    <HiMenuAlt1 className=""></HiMenuAlt1>
                }
            </div>
          <div className={`md:flex absolute md:static duration-1000
           ${open ? 'top-16': '-top-60'}
           bg-black px-6 `}> 
             {
                routes.map(route => <Link key={route.id} route={route}></Link>)
             }
           </div>
          </div> */}
        </nav>

         
    );
};

export default NavBar;
import {useState,react} from 'react'
import { useTheme } from "next-themes"
import { IoMdMenu, IoMdClose } from "react-icons/io"
import { RiMoonFill, RiSunLine} from "react-icons/ri"
import { Link } from "react-scroll/modules"

const items = [
    {
        label: "Home",
        page:"home"
    },
    {
        label: "About",
        page:"about"
    },
    {
        label: "Contact",
        page:"contact"
    }
]

const Navbar = () => {
const { systemTheme, theme, setTheme } = useTheme() 
const currentTheme = theme === "system" ? systemTheme : theme
const [navbar,setNavbar] = useState(false)
// console.log("theme is "  + currentTheme + theme)
return (
    <header className="w-full mx-auto  px-4 bg-white shadow fixed top-0 z-50 sm:px-20 dark:bg-stone-950">
      <div className="justify-between md:items-center md:flex">
            <div>
                <div className="container flex items-center space-x-2">
                    <h2 className = "text-2xl font-bold">Sanskar Pareta</h2>
                </div>
                <div className='md:hidden'>
                    <button 
                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={()=>setNavbar(!navbar)}>
                    {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
                    </button>
                </div>
            </div>
            <div>
             <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
           <div className = "items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {items.map((item,idx)=>{
                return (
                    <Link
                      key={idx}
                      to={item.page}
                      className={
                        "block lg:inline-block text-neutral-900  hover:text-neutral-500 dark:text-neutral-100"
                      }
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      onClick={() => setNavbar(!navbar)}
                    >
                      {item.label}
                    </Link>
                  )
            })
            }

            {
                currentTheme === "dark" ? (
                    <button 
                    onClick={()=> setTheme("light")}
                    className="bg-slate-100 p-2 rounded-xl"
                    >
                         <RiSunLine size = {30} color = "black"/> 
                    </button>

                ):(
                    <button 
                    onClick={()=> setTheme("dark")}
                    className="bg-slate-100 p-2 rounded-xl"
                    >
                        <RiMoonFill size = {30} color = "black"/>
                    </button>

                )
            } 
            

            </div> 
          </div>  
          </div>
        </div>
    </header>
   
)

}

export default Navbar
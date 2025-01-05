
import Link from "next/link";




const Navbar =()=>{

  return(

<div className="bg-white py-4 shadow-md">
            <div className="max-w-7xl mx-auto">
                <nav className="flex justify-center">
                    <ul className="flex space-x-8">
                        <li className="text-gray-700 hover:text-blue-500 transition duration-300">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="text-gray-700 hover:text-blue-500 transition duration-300">
                            <Link href="/blog">Blog</Link>
                        </li>
                        <li className="text-gray-700 hover:text-blue-500 transition duration-300">
                            <Link href="/contact">Contact</Link>
                        </li>
                        <li className="text-gray-700 hover:text-blue-500 transition duration-300">
                            <Link href="/aboutUs">About Us</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

    


      
    )
}
export default Navbar
import Link from "next/link";

export default function footer(){
    return(
         
            <footer className="bg-gradient-to-r from-red-600 to-blue-600 py-6  mt-44 text-white">
  <div className="container mx-auto px-4">
   
    <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
      
      
      <div className="md:w-1/3 text-center md:text-left">
        <h2 className="text-xl font-bold">About the Blog</h2>
        <p className="mt-2 text-sm">
          Welcome to our blog, where we share insightful articles, tutorials, and news on the latest trends in technology, design, and more. Stay inspired and keep learning!
        </p>
      </div>
      
      
      <div className="md:w-1/3 text-center">
        <h2 className="text-xl font-bold">Quick Links</h2>
        <ul className="mt-2 space-y-2">
          <li><Link href="/" className="hover:text-gray-200">Home</Link></li>
          <li><Link href="/blog" className="hover:text-gray-200">Blogs</Link></li>
          <li><Link href="/aboutUs" className="hover:text-gray-200">About Us</Link></li>
          <li><Link href="/contact" className="hover:text-gray-200">Contact</Link></li>
        </ul>
      </div>
      
    
      <div className="md:w-1/3 text-center md:text-right">
        <h2 className="text-xl font-bold">Subscribe</h2>
        <p className="mt-2 text-sm">
          Get the latest posts delivered straight to your inbox.
        </p>
        <form className="mt-4">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="px-3 py-2 text-black rounded-l-md focus:outline-none"
          />
          <button 
            type="submit" 
            className="px-4 py-2 bg-white text-red-600 font-bold rounded-r-md hover:bg-gray-200"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>

    
    <div className="my-6 border-t border-gray-400"></div>

   
    <div className="flex flex-col md:flex-row justify-between items-center">
     
      <div className="mb-4 md:mb-0">
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:text-gray-200">Facebook</a></li>
          <li><a href="#" className="hover:text-gray-200">Twitter</a></li>
          <li><a href="#" className="hover:text-gray-200">Instagram</a></li>
          <li><a href="#" className="hover:text-gray-200">LinkedIn</a></li>
        </ul>
      </div>

      
      <div className="text-sm text-center md:text-right">
        <p>© 2024 Your Blog Name. All rights reserved.</p>
      </div>
    </div>
  </div>
</footer>

        
        
    )
}
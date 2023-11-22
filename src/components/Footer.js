
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    
      
      <footer className="dark:bg-darkbg rounded-lg shadow m-4">
          <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2030 <Link to="/" className="hover:underline">Vlad's Project</Link>. All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
              
              <li>
                  <a href="https://www.linkedin.com/in/vladimir-quezada-5541b4272/" target="_blank" rel="noreffer" className="mr-4 hover:underline md:mr-6">LinkedIn</a>
              </li>
              <li>
                  <a href="https://github.com/vladimirquezadaorozco" target="_blank" rel="noreffer" className="mr-4 hover:underline md:mr-6">Github</a>
              </li>
              
          </ul>
          </div>
      </footer>

    
  )
}



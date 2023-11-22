import PageNotFoundImage from "../assets/PageNotFound.png"
import { Link } from "react-router-dom"
import { Button } from "../components"
import { useEffect } from "react"
export const PageNotFound = () => {

  useEffect(()=>{
    document.title = `Page Not Found / Cinemate `
  })
    return (
      <main>
          <section className="flex flex-col justify-center px-2">
            <div className="flex flex-col items-center my-4">
              <p className="text-7xl text-white my-10 ">404, Oops!</p>
              <div className="max-w-lg">
                <img  className="rounded" src={PageNotFoundImage} alt="404 Page Not Found" />
                </div>
            </div>

            <div className="flex justify-center my-4">
              <Link to="/"> 
              <Button >Go Back Home</Button>
              </Link>
            </div>
          </section>
      </main>
    )
  }
  
import { Link } from "react-router-dom"
import "./Home.scss"
import indexLg from "../assets/index--lg.jpg"
import indexMd from "../assets/index--md.jpg"
import { Links } from "../components/Links"

const Menu = () => {
  return (
    <div>
      <div className="index__menu">
        <Links />
      </div>
    </div>
  )
}

export const Home = () => {  
  return (
    <div>
      <div className="index">
        <transition name="index" >
          <div className="index__container">
            <img alt="" className="index__img--lg" src={indexLg} />
            <img alt="" className="index__img--md" src={indexMd} />
            <Menu />
          </div>
        </transition>
      </div>
    </div>
  )
}


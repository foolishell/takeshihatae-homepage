import { Link } from "react-router-dom"
import "./Home.scss"
import indexLg from "../assets/index--lg.jpg"
import indexMd from "../assets/index--md.jpg"
import facebook from "../assets/facebook.png"
import { Links } from "../components/Links"

const Menu = () => {
  return (
    <div>
      <div className="index__menu">
        <Links />
        <a className="menu__link" href="https://m.facebook.com/people/Takeshi-Hatae/100007454224969">
          <img alt="" className="index__facebook" src={facebook}  />
        </a>
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


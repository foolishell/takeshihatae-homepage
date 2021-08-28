import { Link } from "react-router-dom"


export const Links = () => {
  return (
    <>
      <Link className="menu__link" to="/">Home</Link>
      <Link className="menu__link" to="/information">Information</Link>
      <Link className="menu__link" to="/profile">Profile</Link>
      <Link className="menu__link" to="/gear">Gear</Link>
      <Link className="menu__link" to="/work">Work</Link>
      <Link className="menu__link" to="/contact">Contact</Link>
    </>
  )
}

import { useState } from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom'
import './Header.scss'
import iconClose from '../assets/header__icon--close.svg'
import iconOpen from '../assets/header__icon--open.svg'
import { Links } from './Links'

const ModalMenu = (props) => {
  console.log(props.isOpen)
  return (
    <div className={props.isOpen ? "modal__menu--open" : "modal__menu"}>
      <Links />
    </div>
  )
}

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation();
  const history = useHistory();
  console.log(location)

  history.listen(() => {
    setIsOpen(false)
  });

  return (
    <>
      <header className="header">
        <div className="header__container">
          <Link to="/" className="header__title">Takeshi Hatae</Link>
          { location.pathname !== "/" ? (
              <div className="header__menu--lg">
                <Links />
              </div>
           ) : <></> }
          <div className="header__menu--md">
            <ModalMenu isOpen={isOpen} />
            { isOpen ? (
              <>
                <button onClick={() => setIsOpen(false)}>
                  <img alt="" className="header__icon--close" src={iconClose} />
                </button>
              </>
            ) : (
              <button onClick={() => setIsOpen(true)}>
                <img alt="" className="header__icon--open" src={iconOpen}  />
              </button>
            ) }
          </div>
        </div>
      </header>
    </>
  )
}

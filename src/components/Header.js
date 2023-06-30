import logo from "../images/logo.svg";

export default function Header() {
  return(
    <header className="header">
      <img alt="Логотип сайта" className="header__logo" src={logo}/>
    </header>
  )
}
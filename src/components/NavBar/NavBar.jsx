import classes from './NavBar.module.scss'
import logo from './assets/one-piece-logo'
import Button from '../Button/Button'
import Cart from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <header className= {classes.braground}>
            <div className={classes.encabezado}>
                    <h1 className={classes.titulo}>ONE PIECE</h1>
                    <img src={logo} alt="Icono de ONE PIECE" />
                </div>
            <nav>
                <ul className={classes.ul}>
                    <li><Button label={"Figuras"} /></li>
                    <li><Button label={"Llaveros"} /></li>
                    <li><Button label={"Tazas"} /></li>
                </ul>
            </nav>
        </header>
       
    )
}

export default NavBar
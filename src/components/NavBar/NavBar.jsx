import classes from './NavBar.module.css'
import logo from './assets/logo-calavera.jpg'
import Button from '../Button/Button'
import Cart from '../CartWidget/CartWidget'


const NavBar = () => {
    return (
        <header className={classes.header}>
            <nav className={classes.navBar}>
                <div className={classes.alineacion}>
                    <h1 className={classes.titulo}>ONE PIECE</h1>
                    <img src={logo} alt="Icono de ONE PIECE" />
                </div>

                <div className="container">
                    <ul className={classes.ul}>
                        <li><Button>Figuras</Button></li>
                        <li><Button>Funkos</Button></li>
                        <li><Button>Tazas</Button></li>
                    </ul>
                </div>

                <Cart />
            </nav>


        </header>

    )
}

export default NavBar
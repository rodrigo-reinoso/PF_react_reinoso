import classes from './NavBar.module.css'
import logo from './assets/logo-calavera.jpg'
import Button from '../Button/Button'
import Cart from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

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
                        <li><Link className='link' to ='./category/figuras'><Button>Figuras</Button></Link></li>
                        <li><Link className='link' to ='./category/funko'><Button>Funkos</Button></Link></li>
                        <li><Link className='link' to ='./category/taza'><Button>Tazas</Button></Link></li>
                    </ul>
                </div>

                <Cart />
            </nav>


        </header>

    )
}

export default NavBar
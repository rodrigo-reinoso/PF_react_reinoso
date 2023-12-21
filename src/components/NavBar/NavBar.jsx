import classes from './NavBar.module.css'
import logo from './assets/logo-calavera.jpg'
import Button from '../Button/Button'
import Cart from '../CartWidget/CartWidget'


const NavBar = () => {
    return (
        <header className= {classes.header}>
            <nav className={classes.navBar}>
                <div className= {classes.alineacion}>
                <h1 className={classes.titulo}>ONE PIECE</h1>
                    <img src={logo} alt="Icono de ONE PIECE" />
                </div>
                

                <ul className={classes.ul}>
                    <li><Button label={"Figuras"} /></li>
                    <li><Button label={"Llaveros"} /></li>
                    <li><Button label={"Tazas"} /></li>
                </ul>
                
            </nav>
            <Cart/>

        </header>
       
    )
}

export default NavBar
import classes from './NavBar.module.css'
import logo from './assets/One_piece_logo.png'
import Button from '../Button/Button'


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
                <Cart />
            </nav>
            

        </header>
       
    )
}

export default NavBar
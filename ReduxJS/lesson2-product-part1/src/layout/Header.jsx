import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <Link className="navbar-brand" to="/">Shop</Link>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to="/product">Product</NavLink>
                            </li>
                        </ul>
                    </div>
                    <Link to="/dashboard" className='btn btn-dark'>Dashboard</Link>
                </div>
            </nav>

        </header>
    )
}

export default Header
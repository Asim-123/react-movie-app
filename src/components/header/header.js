import './header.css';
import { NavLink } from 'react-router-dom'
const header = () => {
    return (
        <div className='header'>
            <header>
                <nav> 
                    <h1>Movie React App</h1>
                    <ul>
                    <li><NavLink to="/" className="active">Home</NavLink></li>
                </ul>
                </nav>
            </header>
        </div>
    )
}

export default header;

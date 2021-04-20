import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <div>
            <h4>About</h4>
            <p>Copyright &copy; 2021</p>
            {/* Notice that React's Link does not reload the page, but only the needed content */}
            <p>This will not reload the entire page</p>
            <Link to='/about'>About</Link>
            {/* Notice the ahref reloads the page */}
            <p>This will reload the entire page</p>
            <a href='/about'>About</a> 
        </div>
    )
}

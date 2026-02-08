import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <div className='navigation'>
            <nav>
                <NavLink id='btn' className='btn btn-link shadow-none' to='/'>
                    HOME
                </NavLink>
                <NavLink id='btn' className='btn btn-link shadow-none' to='/about'>
                    ABOUT
                </NavLink>
                <NavLink id='btn' className='btn btn-link shadow-none' to='/contact'>
                    CONTACT
                </NavLink>
                <a  id='btn'
                    className='btn btn-link shadow-none'
                    href='https://100miles.bigcartel.com/'
                    target='_blank'
                    rel='noreferrer'>
                    SHOP
                </a>
            </nav>
        </div>
    );
}

export default Nav;

import React from 'react';
import {Link} from 'react-router-dom';
import {Close} from '@material-ui/icons';

const NavMobile = ({active, showMenu}) => {
    return (
        <ul className={active ? 'flex-col fixed inset-0 flex items-center justify-center gap-12 uppercase bg-stone-50/10 backdrop-blur-md z-10000 lg:hidden' : 'hidden'}>
            <Close onClick={showMenu} className='cursor-pointer'/>
            <li><Link to='/'>Pricing</Link></li>
            <li><Link to='/'>Clients</Link></li>
            <li><Link to='/'>Works</Link></li>
            <li><Link to='/'>Testimonials</Link></li>
            <li><Link to='/'>About</Link></li>
            <li><Link to='/'>Login</Link></li>
        </ul>
    );
};

export default NavMobile;

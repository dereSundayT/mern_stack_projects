import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import React,{useState} from 'react'
import './navbar.scss'
import {Link} from 'react-router-dom'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false) 
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        //clenup function
        return () => window.onscroll = null
    }
    return (
        <div className={isScrolled ? 'navbar scrolled': 'navbar'}>
            <div className="container">
                <div className="left">
                    <img src="https://play-lh.googleusercontent.com/0rgPYj0GwZ6txpYZrzoMdhwzqg7vY6C9B-Ol7jlaz-Ox2rgpD4Tr82ZgDqkirrEohbGm=w412-h220-rw" alt="" />

                     <Link to='/' className='link'>
                     <span>Home</span>
                     </Link>
                     <Link to='/series' className='link'>
                        <span>Series</span>
                     </Link>
                     <Link to='/movies' className='link'>
                        <span>Movies</span>
                     </Link>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                   
                <div className="right">
                    <Search className="icon"/>
                    <span>KID</span>
                    <Notifications className="icon"/>
                    <img src="" alt="profile img" />
                    <div className="profile">
                        <ArrowDropDown className="icon"/>
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar

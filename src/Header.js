import React from 'react';
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import {Link, useNavigate} from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


function Header({backButton}) {

    const navigate = useNavigate();
    return (
        //BEM
        <div className='header'>
            {

                backButton ? <IconButton onClick={()=> navigate(`${backButton}`, {replace:true})}>
                    <ArrowBackIcon fontSize='large' className='header_icon'/>
                </IconButton> :
            <IconButton>
                <PersonIcon fontSize='large' className='header_icon' />
            </IconButton>

}
            

            <Link to='/'>
            <img
                className='header_logo'
                src='https://play-lh.googleusercontent.com/TcHgSH30vCBCtQfyFLWvvPJdpOAJrSp1OtqopwMue3yRiXa7wT5Fs8gUbA3oJylGW991'
                alt='tinder logo' />

            </Link>

            <Link to='/chats'>
            <IconButton>
                <ForumIcon fontSize='large' className='header_icon' />
            </IconButton>
            </Link>
            

        </div>
    );
}

export default Header;
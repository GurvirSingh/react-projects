import React from 'react';
import GoogleAuth from './GoogleAuth';
import Link from './Link'

const Header = () => {
    return (
        <div className="ui secondary pointing menu" id="yt--header">
            <Link href="/" className="item"><i class="video icon"></i>Live Streamer</Link>
            <Link href="/list" className="item">Wiki Search</Link>
            <Link href="/dropdown" className="item">Dropdown</Link>

            <div className="right menu">
                    {/* <Link to='/' className="item">
                        
                    </Link> */}

                    <GoogleAuth />
                </div>
        </div>
    );
};

export default Header;
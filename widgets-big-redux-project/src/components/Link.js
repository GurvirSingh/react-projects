import React from 'react';

const Link = ({ className, href, children }) => {

    const onClick = (event) => {
        if(event.metaKey || event.ctrlKey) {
            return null;
        }
        event.preventDefault();
        window.history.pushState({}, '', href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };

    return <a onClick={onClick} className={className} href={href} id="yt--header-menuItem">{children}</a>;
};

export default Link;
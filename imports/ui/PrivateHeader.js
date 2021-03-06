import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { createContainer } from 'meteor/react-meteor-data';
import { Session } from 'meteor/session';

export const PrivateHeader = (props) => {
    const navImageSrc = props.isNavOpen ? '/images/x.svg' : '/images/bars.svg';
    return (
        <div className="header">
            <div className="header__content">
                <img className="header_nav-toggle" src={navImageSrc} onClick={props.handleNavClick}/>
                <h1 className="header__title">{props.title}</h1>
                <button className="button button--link-text" onClick={() => props.handleLogout()}>Logout</button>
            </div>
        </div>
    );
}

PrivateHeader.propTypes = {
    title: React.PropTypes.string.isRequired,
    handleLogout: React.PropTypes.func.isRequired,
    handleNavClick: React.PropTypes.func.isRequired,
    isNavOpen: React.PropTypes.bool.isRequired
};

export default createContainer(() => {
    return {
        handleLogout: () => Accounts.logout(),
        handleNavClick: () => Session.set('isNavOpen', !Session.get('isNavOpen')),
        isNavOpen: Session.get('isNavOpen')
    }
}, PrivateHeader);

// export default PrivateHeader;
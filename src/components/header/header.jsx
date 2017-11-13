import PropTypes from 'prop-types';
import React from 'react';

export class Header extends React.Component {

    static get propTypes() {
        return {
            title: PropTypes.string,
            menu_icon: PropTypes.string
        };
    };

    static get defaultProps() {
        return {
            title: 'OmniBot',
            menu_icon: ''
        };
    };

    getTitle() {
        const n = Math.round(this.props.title.length/2);
        console.log(Math.round(n/2));
        const first = this.props.title.substr(0, n);
        const second = this.props.title.substr(n);
        return (
            <h1 className="site-title"><a href="#">{first}<span className="site-title-last">{second}</span></a></h1>
        );
    }

    render() {
       return (
            <div className="Header fixed-top">
                {this.getTitle()}
            </div>
       );
    }
}
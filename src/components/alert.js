import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class Alert extends Component {

    static get propTypes() {
        return {
            type: PropTypes.string,
            className: PropTypes.string,
            isDismissible: PropTypes.bool,
            onClose: PropTypes.func
        }
    };

    static get defaultProps() {
        return {
            type: 'success',
            className: '',
            isDismissible: false,
            onClose: _.noop
        }
    };

    getAlertClass() {
        switch (this.props.type) {
            case 'success':
                return 'success';

            case 'remove':
            case 'danger':
                return 'danger';

            case 'info':
                return 'info';

            case 'warning':
                return 'warning';

            default:
                throw new Error('Unknown Alert Type');
        }
    }

    renderCloseButton() {
        if (! this.props.isDismissible) {
            return null;
        }
        return (
            <button className="close" onClick={this.props.onClose}>
                x
            </button>
        );
    }

    render() {
        return (
            <div className={`alert alert-${this.getAlertClass()} ${this.props.isDismissible ? 'alert-dismissible' : ''} ${this.props.className}`}>
                {this.renderCloseButton()}
                {this.props.children}
            </div>
        );
    }

}

export default Alert;
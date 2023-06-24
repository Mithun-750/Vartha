import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CountrySelector.css';

class CountrySelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CCountry: '',
        };
    }


    componentDidMount() {
        const cachedCountry = localStorage.getItem('country');
        if (cachedCountry) {
            this.setState({ CCountry: cachedCountry });
        }
    }

    render() {
        return (
            <div className="country-selector">
                <select
                    className="country-selector__select"
                    value={(this.state.CCountry != '') ? this.state.CCountry : this.props.country}
                    onChange={this.props.handleCountryChange}
                >
                    <option value="">Select a country</option>
                    <option value="au">Australia</option>
                    <option value="ca">Canada</option>
                    <option value="in">India</option>
                    <option value="ie">Ireland</option>
                    <option value="pk">Pakistan</option>
                    <option value="ph">Philippines</option>
                    <option value="sg">Singapore</option>
                    <option value="gb">United Kingdom</option>
                    <option value="us">United States</option>
                </select>
            </div>
        );
    }
}

export default CountrySelector;

CountrySelector.propTypes = {
    country: PropTypes.string,
    handleCountryChange: PropTypes.func,
};
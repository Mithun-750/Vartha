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
                    <option value="br">Brazil</option>
                    <option value="ca">Canada</option>
                    <option value="eg">Egypt</option>
                    <option value="fr">France</option>
                    <option value="de">Germany</option>
                    <option value="gr">Greece</option>
                    <option value="in">India</option>
                    <option value="ie">Ireland</option>
                    <option value="il">Israel</option>
                    <option value="it">Italy</option>
                    <option value="jp">Japan</option>
                    <option value="nl">Netherlands</option>
                    <option value="no">Norway</option>
                    <option value="pk">Pakistan</option>
                    <option value="pe">Peru</option>
                    <option value="ph">Philippines</option>
                    <option value="pt">Portugal</option>
                    <option value="ro">Romania</option>
                    <option value="ru">Russian Federation</option>
                    <option value="sg">Singapore</option>
                    <option value="es">Spain</option>
                    <option value="se">Sweden</option>
                    <option value="ch">Switzerland</option>
                    <option value="tw">Taiwan</option>
                    <option value="ua">Ukraine</option>
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
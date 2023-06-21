import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './Navbar.css'
import CountrySelector from '../CountrySelector/CountrySelector';

export default class Navbar extends Component {
    drop() {
        document.getElementById('dropdown-content').classList.toggle("drop")
        document.getElementById('categories-arrow').classList.toggle("up")
    }
    navtoggle() {
        document.getElementById('navbar').classList.toggle("expand")
        document.getElementById('ham').classList.toggle("expand")

        if (document.getElementById('navbar').classList.contains("expand")) {
            setTimeout(() => {
                document.getElementById('navbar').classList.toggle("no_over")
            }, 500);
        } else {
            document.getElementById('navbar').classList.toggle("no_over")

        }
    }
    render() {
        return (
            <nav id='navbar' className={`${this.props.theme}`}>
                <a href="/"><h1 id='logo' className={`${this.props.theme}`}>Vartha</h1></a>
                <div id='ham' onClick={this.navtoggle} >

                    <span className="material-symbols-outlined">
                        menu
                    </span>
                </div>
                <div id="search_container">
                    <input
                        type="text"
                        name=""
                        id="searchbox"
                        value={this.props.searchQuery}
                        onChange={this.props.handleSearchChange.bind(this)}
                        onKeyDown={event => {
                            if (event.key === 'Enter') {
                                this.props.handleSearchSubmit();
                            }
                        }}
                    />
                    <h5 id={`searchbtn`} className={`${this.props.theme}`} onClick={this.props.handleSearchSubmit} >Search</h5>
                </div>
                <ul>
                    <li>
                        <span className="material-symbols-outlined" onClick={() => { this.props.ToggleTheme(); this.navtoggle() }} style={{ cursor: 'pointer', }}>
                            {this.props.theme}_mode
                        </span>
                    </li>
                    <li onMouseEnter={this.drop} onMouseLeave={this.drop}>
                        <span id='categories'>
                            Categories<span id='categories-arrow' className="material-symbols-outlined">expand_more</span>
                        </span>
                        <div id='dropdown-content' className={`${this.props.theme}`}>
                            <a href="/" className={`nav-link ${this.props.theme}`}>General</a>
                            <a href="/business" className={`nav-link ${this.props.theme}`}>Business</a>
                            <a href="/technology" className={`nav-link ${this.props.theme}`}>Technology</a>
                            <a href="/health" className={`nav-link ${this.props.theme}`}>Health</a>
                            <a href="/science " className={`nav-link ${this.props.theme}`}>Science </a>
                            <a href="/sports" className={`nav-link ${this.props.theme}`}>Sports</a>
                            <a href="/entertainment" className={`nav-link ${this.props.theme}`}>Entertainment</a>
                        </div>
                    </li>
                    <li><a href="/about" className={`about-link ${this.props.theme}`} >About</a></li>
                    <li>
                        <CountrySelector

                            country={this.props.Country}
                            handleCountryChange={this.props.handleCountryChange}
                        />
                    </li>
                </ul>
            </nav>
        )
    }
}

Navbar.propTypes = {
    searchQuery: PropTypes.string.isRequired,
    handleSearchChange: PropTypes.func.isRequired,
    handleSearchSubmit: PropTypes.func.isRequired,
    ToggleTheme: PropTypes.func.isRequired,
    theme: PropTypes.string,
    country: PropTypes.string,
    handleCountryChange: PropTypes.func,
};

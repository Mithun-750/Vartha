import React, { Component } from 'react'
import './App.css'
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import NewsComponent from './components/NewsComponent/NewsComponent'
import About from './components/About/About';
import LoadingBar from 'react-top-loading-bar'


class App extends Component {
  apikey = import.meta.env.VITE_REACT_APP_NEWS_API
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: '',
      dynamicRoutes: [],
      theme: 'dark',
      progress: 0,
      Country: '',
    };
  }

  componentDidMount() {
    const cachedTheme = localStorage.getItem('theme');
    if (cachedTheme) {
      this.setState({ theme: cachedTheme });
    }
    const cachedCountry = localStorage.getItem('country');
    if (cachedCountry) {
      this.setState({ Country: cachedCountry });
    }
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  ToggleTheme = () => {
    if (this.state.theme == 'light') {
      this.setState({ theme: 'dark' })
      localStorage.setItem('theme', 'dark');
    } else {
      this.setState({ theme: 'light' })
      localStorage.setItem('theme', 'light');
    }
  }

  handleCountryChange = (event) => {
    const Country = event.target.value;
    this.setState({ Country });
    localStorage.setItem('country', Country);
    setTimeout(() => {
      window.location.reload(false);
    }, 300);
  }

  handleSearchChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  handleSearchSubmit = () => {
    const { searchQuery } = this.state;

    if (searchQuery !== '') {

      this.setState((prevState) => ({
        dynamicRoutes: [...prevState.dynamicRoutes, searchQuery]
      }));

      setTimeout(() => {
        this.props.navigate(`/${searchQuery}`);
      }, 500);
      this.setState({ searchQuery: '' });
    }
  };


  render() {
    return (
      <>
        <div id="supreme" className={`${this.state.theme}`}>


          <Navbar
            searchQuery={this.state.searchQuery}
            handleSearchChange={this.handleSearchChange}
            handleSearchSubmit={this.handleSearchSubmit}
            ToggleTheme={this.ToggleTheme}
            theme={this.state.theme}
            country={this.state.Country}
            handleCountryChange={this.handleCountryChange}
          />
          <LoadingBar
            color='red'
            progress={this.state.progress}
          />
          <div className="px"></div>
          <Routes>
            <Route path="/" element={<NewsComponent apikey={this.apikey} country={this.state.Country} category='general' theme={this.state.theme} setProgress={this.setProgress} />} />
            <Route path="/about" element={<About />} />
            <Route path="/business" element={<NewsComponent apikey={this.apikey} country={this.state.Country} category='business' theme={this.state.theme} setProgress={this.setProgress} />} />
            <Route path="/technology" element={<NewsComponent apikey={this.apikey} country={this.state.Country} category='technology' theme={this.state.theme} setProgress={this.setProgress} />} />
            <Route path="/health" element={<NewsComponent apikey={this.apikey} country={this.state.Country} category='health' theme={this.state.theme} setProgress={this.setProgress} />} />
            <Route path="/science" element={<NewsComponent apikey={this.apikey} country={this.state.Country} category='science' theme={this.state.theme} setProgress={this.setProgress} />} />
            <Route path="/sports" element={<NewsComponent apikey={this.apikey} country={this.state.Country} category='sports' theme={this.state.theme} setProgress={this.setProgress} />} />
            <Route path="/entertainment" element={<NewsComponent apikey={this.apikey} country={this.state.Country} category='entertainment' theme={this.state.theme} setProgress={this.setProgress} />} />
            {this.state.dynamicRoutes.map((route, index) => (
              <Route
                key={index}
                path={`/${route}`}
                element={<NewsComponent apikey={this.apikey} country={this.state.Country} category="" q={route} theme={this.state.theme} setProgress={this.setProgress} />}
              />
            ))}
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </div>
      </>
    )
  }
}

export function APPwithRouter() {
  const navigate = useNavigate();
  return (<App navigate={navigate}></App>)
}

export default APPwithRouter
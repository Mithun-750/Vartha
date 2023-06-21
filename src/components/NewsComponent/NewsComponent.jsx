import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NewsComponent.css';
import NewsItem from '../NewsItem/NewsItem';
import loader from '../../assets/spinner.gif'

export default class NewsComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            articles: [],
            articlesError: false,
            loding: true,
            noarticles: false,
        };
    }

    capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }


    componentDidMount() {
        this.props.setProgress(10)
        this.fetchArticles();
        this.props.setProgress(100)
    }

    componentDidUpdate(prevProps) {
        if ((prevProps.category !== this.props.category) || (prevProps.q !== this.props.q)) {
            this.fetchArticles();
            this.props.setProgress(20)
        }
    }

    fetchArticles() {
        let apikey = this.props.apikey;
        let url = '';
        let country = localStorage.getItem('country');
        if (country == '' || (!country)) {

            if (this.props.category != '') {
                url = `https://gnews.io/api/v4/top-headlines?category=${this.props.category}&lang=en&max=10&apikey=${apikey}`;
                if (this.props.category != 'general') {
                    document.title = `${this.capitalizeFirstLetter(this.props.category)} - Vartha`
                }
            } else {
                url = `https://gnews.io/api/v4/search?q=${this.props.q}&apikey=${apikey}`;
            }
            this.props.setProgress(50)
        } else {

            if (this.props.category != '') {
                url = `https://gnews.io/api/v4/top-headlines?category=${this.props.category}&lang=en&country=${country}&max=10&apikey=${apikey}`;
                if (this.props.category != 'general') {
                    document.title = `${this.capitalizeFirstLetter(this.props.category)} - Vartha`
                }
            } else {
                url = `https://gnews.io/api/v4/search?q=${this.props.q}&country=${country}&apikey=${apikey}`;
            }
            this.props.setProgress(50)
        }

        fetch(url)
            .then((response) => {
                this.props.setProgress(60)
                return response.json()
            })
            .then((data) => {
                this.setState({ loding: false })
                if (data.errors) {
                    this.setState({ articlesError: true })
                    throw new Error("Error fetching articles");
                } else {
                    if (data.articles.length < 1) {
                        this.setState({ noarticles: true });

                    } else {
                        this.setState({ noarticles: false });

                    }

                    this.setState({ articles: data.articles });
                    this.props.setProgress(80)
                }

                this.props.setProgress(100)
            })
            .catch((error) => {
                this.setState({ articlesError: true })
                console.error('Error fetching articles:', error);
            });
    }

    render() {
        return (
            <>
                <h1 className="NewsComponentTitle">
                    {this.props.category === '' && this.props.q != '' ? (
                        `Showing results for "${this.props.q}"`
                    ) : (
                        <React.Fragment>
                            News Flash <span className="material-symbols-outlined">bolt</span>{' '}
                            {this.props.category === 'general' ? '' : `(${this.capitalizeFirstLetter(this.props.category)})`}
                        </React.Fragment>
                    )}

                </h1>
                <div className={`NewsComponent ${this.props.theme}`} >
                    {this.state.articles.map((element) => {
                        return <NewsItem key={element.title} image={element.image} title={element.title} description={element.description} theme={this.props.theme} url={element.url} publishedAt={element.publishedAt} source={element.source} />
                    })}
                    {this.state.loding && (
                        <img src={loader} alt="loading..." />
                    )}
                    {this.state.noarticles && (
                        <h2 style={{ textAlign: 'center' }}>Could not find articles for you :(</h2>
                    )}
                    {this.state.articlesError && (
                        <div className='Error-message'>
                            <h2 style={{ textAlign: 'center' }}>Failed to find articles for you :(</h2>
                            <h3>WHY?</h3>
                            <ul>
                                <li>
                                    <h4>This website gets its news from <a href="https://gnews.io/#pricing" target="_blank" rel="noopener noreferrer">gnews.io</a> which is not free. We will be able to get articles only 100 times a day and we must have reached our limit today please come back tommorow.If you like reading news from this super cool website you could donate us.</h4>
                                </li>
                                <li>
                                    <h4>News you are earching for does not exist.</h4>
                                </li>
                            </ul>

                        </div>

                    )}
                </div>
            </>
        );
    }
}

NewsComponent.propTypes = {
    category: PropTypes.string,
    q: PropTypes.string,
    theme: PropTypes.string,
    setProgress: PropTypes.func,
    country: PropTypes.string,
    apikey: PropTypes.string
};

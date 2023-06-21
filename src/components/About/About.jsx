import React, { Component } from 'react'
import './About.css'

export default class About extends Component {
    render() {
        return (
            <>
                <div id="about">

                    <div className='bottomline'>

                        <h1>About Vartha</h1>
                        <p>
                            Vartha is an open-source news web application built using React and <a href="https://gnews.io" target="_blank" rel="noopener noreferrer">GNewsAPI</a>, dedicated to delivering the latest and most reliable news to our users. Our platform is designed to provide a seamless and user-friendly experience for staying informed about current events from around the world.
                        </p>
                    </div>

                    <div className='features bottomline'>
                        <h1>Key Features:</h1>
                        <div>
                            <h3>Real-time News Updates:</h3> Our web app integrates with reputable news APIs to bring you the most up-to-date news articles from a wide range of trusted sources.
                        </div>
                        <div>
                            <h3>Customizable News Categories:</h3> You can personalize your news feed by selecting your preferred categories, ensuring that you receive news tailored to your interests.
                        </div>
                        <div>
                            <h3>Search Functionality:</h3> Easily search for specific topics, keywords, or news articles to find the information you need quickly.
                        </div>
                        <div>

                            <h3>Responsive Design:</h3> Our web app is optimized for various devices, including desktops, tablets, and mobile phones, allowing you to access news anytime, anywhere.
                        </div>
                    </div>

                    <h3>

                        At Vartha, we prioritize accuracy, objectivity, and diversity in news reporting. We strive to provide a balanced representation of different perspectives and ensure that our users have access to reliable and high-quality information. Our team is committed to continuously improving and expanding the functionality of our web app to meet the evolving needs of our users.
                    </h3>

                    <h3 className='bottomline'>

                        We value and encourage community collaboration. Vartha is an open-source project, and we welcome contributions from developers worldwide. If you're interested in getting involved or have suggestions for improvements, please visit our GitHub repository.
                    </h3>

                    <h4>

                        Stay informed with Vartha and empower yourself with knowledge about the world around you.
                    </h4>
                </div>
            </>
        )
    }
}

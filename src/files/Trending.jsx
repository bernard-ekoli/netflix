import React, { useState, useEffect } from 'react';
import { scrollImages, nigTVShows, gMovieEng, gMovieOther, globalTvEng, globalTvOther } from './images';
import './css/Trending.css';
import Scroll from './Scroll';

const Trending = () => {
    const [scrolls, setScrolls] = useState(scrollImages);
    const [render, setRender] = useState(true);
    const [location, setLocation] = useState('Loading location...');
    useEffect(() => {
        fetch('https://ipinfo.io/json?token=2018637cad6420')  // Your IPInfo token
            .then(response => response.json())
            .then(data => {
                const { country } = data;
                console.log(data)
                setLocation(`${country}`);
            })
            .catch(error => {
                console.error('Error fetching location:', error);
                setLocation('Location could not be determined');
            });

        const locationSelect = document.getElementById('locationSelect');
        const moviesList = document.getElementById('moviesList'); // Using ID for second dropdown

        locationSelect.addEventListener('change', () => {
            const selectedText = locationSelect.options[locationSelect.selectedIndex].text;

            if (selectedText === 'Global') {
                // Update options for Global location
                let option1 = document.createElement('option');
                option1.value = 'location1';
                option1.textContent = 'Movies - English';

                let option2 = document.createElement('option');
                option2.value = 'location2';
                option2.textContent = 'Movies - Other Language';

                let option3 = document.createElement('option');
                option3.value = 'location3';
                option3.textContent = 'TV Shows - English';

                let option4 = document.createElement('option');
                option4.value = 'location4';
                option4.textContent = 'TV Shows - Other Languages';

                moviesList.innerHTML = ''; // Clear previous options
                moviesList.appendChild(option1);
                moviesList.appendChild(option2);
                moviesList.appendChild(option3);
                moviesList.appendChild(option4);
                setScrolls(gMovieEng);
                setRender(prev => !prev);
            } else {
                // Update options for local location
                let option1 = document.createElement('option');
                option1.value = 'location1';
                option1.textContent = 'Movies';

                let option2 = document.createElement('option');
                option2.value = 'location2';
                option2.textContent = 'TV Shows';

                moviesList.innerHTML = ''; // Clear previous options
                moviesList.appendChild(option1);
                moviesList.appendChild(option2);
                setScrolls(scrollImages);
                setRender(prev => !prev);
            }
        });

        moviesList.addEventListener('change', () => {
            const selectedText = moviesList.options[moviesList.selectedIndex].text;
            console.log(selectedText);

            if (selectedText === 'Movies') {
                setScrolls(scrollImages);
                setRender(prev => !prev);
            } else if (selectedText === 'TV Shows') {
                setScrolls(nigTVShows);
                setRender(prev => !prev);
            } else if (selectedText === 'Movies - English') {
                setScrolls(gMovieEng);
                setRender(prev => !prev);
            } else if (selectedText === 'Movies - Other Language') {
                setScrolls(gMovieOther);
                setRender(prev => !prev);
            } else if (selectedText === 'TV Shows - English') {
                setScrolls(globalTvEng);
                setRender(prev => !prev);
            } else if (selectedText === 'TV Shows - Other Languages') {
                setScrolls(globalTvOther);
                setRender(prev => !prev);
            }
        });
    }, []);


    return (
        <>
            <div id='trending'>
                <span>Trending Now</span>
                <div id="LocationShow">
                    <div className="dropdown">
                        <label htmlFor="locationSelect">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 36 36" data-icon="GlobeEarthLarge" aria-hidden="true">
                                <path fillRule="evenodd" clipRule="evenodd" d="M2 18C2 9.16344 9.16344 2 18 2C20.9143 2 23.6466 2.77915 26 4.14052V6C26 7.10457 25.1046 8 24 8H21H20V9V11C20 12.1046 19.1046 13 18 13H16.0244H14.8104L15.0429 14.1915L16.0185 19.1915L16.1763 20H17H22C23.1046 20 24 20.8954 24 22V23V24V25H25H29C30.1046 25 31 25.8954 31 27V27.3294C28.0991 31.3645 23.3661 33.9939 18.0185 34L16.1486 27.7148L15.9359 27H15.1901H14C12.8954 27 12 26.1046 12 25V23.537V22.8926L11.4132 22.6264L2.00391 18.3574C2.00131 18.2386 2 18.1194 2 18ZM2.2186 20.651C3.36785 27.5433 8.92292 32.9447 15.8909 33.8622L14.4443 29H14C11.7909 29 10 27.2091 10 25V24.1814L2.2186 20.651ZM32.4245 24.9319C33.4342 22.8346 34 20.4834 34 18C34 12.9472 31.6579 8.4415 28 5.50926V6C28 8.20914 26.2091 10 24 10H22V11C22 13.2091 20.2091 15 18 15H17.2384L17.8237 18H22C24.2091 18 26 19.7909 26 22V23H29C30.4523 23 31.7237 23.7739 32.4245 24.9319ZM18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0Z" fill="currentColor" />
                            </svg>
                        </label>
                        <select id="locationSelect">
                            <option value="location1">{location}</option>
                            <option value="location1">Global</option>
                        </select>
                    </div>
                    <div className="dropdown">
                        <label htmlFor="moviesList">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 36 36" data-icon="FilmLarge" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 4C10.268 4 4 10.268 4 18C4 25.732 10.268 32 18 32C25.732 32 32 25.732 32 18C32 10.268 25.732 4 18 4ZM10.248 32H2V34H18C26.8366 34 34 26.8366 34 18C34 9.16344 26.8366 2 18 2C9.16344 2 2 9.16344 2 18C2 24.0241 5.32915 29.2705 10.248 32ZM16 13C16 14.6569 14.6569 16 13 16C11.3431 16 10 14.6569 10 13C10 11.3431 11.3431 10 13 10C14.6569 10 16 11.3431 16 13ZM13 26C14.6569 26 16 24.6569 16 23C16 21.3431 14.6569 20 13 20C11.3431 20 10 21.3431 10 23C10 24.6569 11.3431 26 13 26ZM26 13C26 14.6569 24.6569 16 23 16C21.3431 16 20 14.6569 20 13C20 11.3431 21.3431 10 23 10C24.6569 10 26 11.3431 26 13ZM23 26C24.6569 26 26 24.6569 26 23C26 21.3431 24.6569 20 23 20C21.3431 20 20 21.3431 20 23C20 24.6569 21.3431 26 23 26ZM20 18C20 19.1046 19.1046 20 18 20C16.8954 20 16 19.1046 16 18C16 16.8954 16.8954 16 18 16C19.1046 16 20 16.8954 20 18Z" fill="currentColor" /></svg>
                        </label>
                        <select id="moviesList">
                            <option value="location1">Movies</option>
                            <option value="location2">TV Shows</option>
                        </select>
                    </div>
                </div>
            </div>
            <Scroll scrolls={scrolls} setScrolls={setScrolls} />
        </>
    );
};

export default Trending;

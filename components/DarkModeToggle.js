import { useState } from "react";

export default function DarkModeToggle({ darkMode, toggleDarkMode }) {
    if (darkMode) {
        return (
            <svg className="cursor-pointer inline fill-deep-sky-blue mx-2" onClick={toggleDarkMode} width="45" height="43" viewBox="0 0 45 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.95225 35.3075L8.7135 38.0688L12.2385 34.5633L9.45766 31.7825L5.95225 35.3075ZM20.5418 42.9646H24.4585V37.1875H20.5418V42.9646ZM22.5002 9.77084C19.3839 9.77084 16.3952 11.0088 14.1917 13.2123C11.9881 15.4159 10.7502 18.4045 10.7502 21.5208C10.7502 24.6371 11.9881 27.6258 14.1917 29.8293C16.3952 32.0329 19.3839 33.2708 22.5002 33.2708C25.6165 33.2708 28.6051 32.0329 30.8087 29.8293C33.0122 27.6258 34.2502 24.6371 34.2502 21.5208C34.2502 15.0192 28.9822 9.77084 22.5002 9.77084ZM38.1668 23.4792H44.0418V19.5625H38.1668V23.4792ZM32.7618 34.5633L36.2868 38.0688L39.0481 35.3075L35.5427 31.7825L32.7618 34.5633ZM39.0481 7.73417L36.2868 4.97292L32.7618 8.47834L35.5427 11.2592L39.0481 7.73417ZM24.4585 0.0770874H20.5418V5.85417H24.4585V0.0770874ZM6.8335 19.5625H0.958496V23.4792H6.8335V19.5625ZM12.2385 8.47834L8.7135 4.97292L5.95225 7.73417L9.45766 11.2592L12.2385 8.47834Z" fill="#03A9F4"/>
            </svg>
        );
    }

    return (
        <svg className="cursor-pointer inline fill-deep-sky-blue mx-2" onClick={toggleDarkMode} width="32" height="41" viewBox="0 0 32 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.58399 25.5685C2.37965 28.5387 3.86354 31.2797 5.91552 33.5698C7.96751 35.8598 10.5299 37.6345 13.3953 38.7501C16.2607 39.8657 19.3485 40.2909 22.4087 39.9912C25.469 39.6916 28.4157 38.6755 31.0102 37.0253C26.8461 36.8474 22.8473 35.3456 19.5955 32.7383C16.3438 30.1311 14.0087 26.5543 12.93 22.5284C11.8512 18.5024 12.0851 14.2373 13.5975 10.3535C15.11 6.46962 17.8221 3.16962 21.3395 0.933495C18.2674 0.801644 15.2075 1.39505 12.4074 2.66568C9.60729 3.9363 7.14576 5.84843 5.22208 8.24726C3.29839 10.6461 1.96662 13.4642 1.33457 16.4734C0.70252 19.4827 0.787965 22.5984 1.58399 25.5685Z"/>
        </svg>
    );
}

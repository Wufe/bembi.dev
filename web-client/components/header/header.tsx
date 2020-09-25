import * as React from 'react';
import './header.scss';

export const Header = () =>
    <div className="header__component">
        <div className="header__hero">
            <div className="hero__text-container">
                <div className="hero__title">
                    <span>Simone</span> <span>Bembi</span>
                </div>
                <div className="hero__subtitle --nested">
                    Software developer
                </div>
                <div className="hero__subtitle --accent-text">
                    ________________
                </div>
            </div>
        </div>
    </div>;
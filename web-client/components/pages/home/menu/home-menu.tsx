import * as React from 'react';
import './home-menu.scss';

type Props = {}

export const HomeMenu = (props: Props) => <div className="menu__component">
    <div className="__container">
        <a className="__item" href="#technologies">Technologies</a>
        <a className="__item" href="#contacts">Contacts</a>
        <a className="__item" href="#projects">Projects</a>
    </div>
</div>
import * as React from 'react';
import './contacts.scss';
import Me from '/assets/me.jpg';

type Props = {
    id?: string;
}

export const Contacts = (props: Props) => <div className="contacts__component" id={props.id}>
    <span className="__title">Meet me!</span>
    <div className="__grid">
        <div className="__image">
            <img src={Me} alt=""/>
        </div>
        <div className="__contact --empty"></div>
        <div className="__contact --empty"></div>
        <div className="__contact --empty"></div>
        <a className="__contact --right" href="https://github.com/wufe" target="_blank">
            wufe
            <i className="fa fa-github"></i>
        </a>
        <a className="__contact --left" href="https://www.facebook.com/simonebmb" target="_blank">
            <i className="fa fa-facebook"></i>
            simonebmb
        </a>
        <a className="__contact --empty" href="" target="_blank"></a>
        <a className="__contact --empty" href="" target="_blank"></a>
        <a className="__contact --right" href="https://twitter.com/simonebmb" target="_blank">
            @simonebmb
            <i className="fa fa-twitter"></i>
        </a>
        <a className="__contact --left" href="mailto:simone.bembi@gmail.com" target="_blank">
            <i className="fa fa-inbox"></i>
            simone.bembi
        </a>
        <div className="__contact --empty"></div>
        <a className="__contact --center" href="https://www.linkedin.com/in/simonebmb/" target="_blank">
            simonebmb
            <i className="fa fa-linkedin"></i>
        </a>
        <div className="__contact --empty"></div>
    </div>
</div>
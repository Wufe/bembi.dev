import * as React from 'react';
import './project-logo.scss';

type TProps = {
    header?: string;
    title: string;
    image: string;
    imageFallback: string;
    repoLink?: {
        label: string;
        url: string;
    }
    link?: {
        label?: string;
        url: string;
    }
    // logoStyles?: React.CSSProperties;
    initialBackgroundSize?: string;
}

export const ProjectLogo = (props: TProps) => {

    return <div className="project-logo__component">
        <div className="__header-container">
            <span className="__title">
                {props.header}
            </span>
            <div className="__actions-container">
                {props.repoLink && <a href={props.repoLink.url} target="_blank">{props.repoLink.label}</a>}
            </div>
        </div>

        <div className="__logo-container">
            <a
                href={props.link && props.link.url || null}
                target="_blank"
                className="__logo">
                <picture>
                    <source srcSet={props.image} type="image/webp" />
                    <source srcSet={props.imageFallback} type="image/jpeg" />
                    <img src={props.imageFallback} alt={props.header} />
                </picture>
            </a>
            <span className="__title">{props.title}</span>
        </div>

    </div>;
}
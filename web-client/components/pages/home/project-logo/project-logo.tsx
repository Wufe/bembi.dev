import * as React from 'react';
import './project-logo.scss';

type TProps = {
    header?: string;
    title: string;
    image: string;
    repoLink?: {
        label: string;
        url: string;
    }
    link?: {
        label?: string;
        url: string;
    }
    logoStyles?: React.CSSProperties;
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
                style={{
                    backgroundImage: `url('${props.image}')`,
                    ...(props.logoStyles || {})
                }}
                target="_blank"
                className="__logo"></a>
            <span className="__title">{props.title}</span>
        </div>

    </div>;
}
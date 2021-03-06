import * as React from 'react';
import './section.scss';

export enum SectionAlignment {
    LEFT = 'left',
    RIGHT = 'right'
}

export const SectionTitle = (props: React.PropsWithChildren<{}>) =>
    <div className="section__title">{props.children}</div>;

export const Section = (props: React.PropsWithChildren<{
    alignment: SectionAlignment;
    spaced?: boolean;
    theme?: string;
    accent?: string;
    large?: boolean;
    title: string;
    id?: string;
    grid?: boolean;
}>) => <div id={props.id} className={
            `section__component
            ${props.spaced ? ' --spaced' : ''}
            ${props.large ? ' --large' : ''}
            ${props.theme ? '--theme-' + props.theme : '--theme-none'}
            ${props.accent ? '--accent-' + props.accent : ''}
            ${props.grid ? '--grid' : ''}`
        }>
    <div className={
        `__container
        --${props.alignment}-align`
    }>
        <SectionTitle>{props.title}</SectionTitle>
        <>
            {props.children}
        </>
    </div>
</div>


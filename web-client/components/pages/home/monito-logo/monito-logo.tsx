import * as React from 'react';
import './monito-logo.scss';
import wideMonitoImage from '/assets/projects/monito/compressed-wide.jpg';

export const MonitoLogo = () => <div className="monito-project__component">
    <div className="__header-container">
        <span className="__title">
            Mònito
        </span>
        <div className="__actions-container">
            <a href="https://github.com/wufe/monito" target="_blank">Github</a>
        </div>
    </div>
    
    <div className="__monito-logo-container">
        <a
            href="https://monito.bembi.dev"
            style={{
                backgroundImage: `url('${wideMonitoImage}')`
            }}
            target="_blank"
            className="__monito-logo"></a>
    </div>
</div>
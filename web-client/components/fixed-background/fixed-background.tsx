import * as React from 'react';
const FloorAnimation = require('@wufe/floor-animation').default;
import './fixed-background.scss';

export class FixedBackground extends React.Component<{}, {
    showAnimation: boolean;
    yaw: number
}> {

    _mediaQueryList: MediaQueryList;

    constructor(props: {}) {
        super(props);

        let showAnimation = false;

        if (window.matchMedia) {
            this._mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
            if (this._mediaQueryList.matches) {
                showAnimation = true;
            }
        }

        this.state = {
            showAnimation,
            yaw: 2.4
        };
    }

    private onMediaChange = (queryList: MediaQueryListEvent) => {
        const showAnimation = queryList.matches;

        if (showAnimation !== this.state.showAnimation) {
            this.setState({
                showAnimation
            });
        }
    }

    onScroll = () => {
        const scrollTop = document.documentElement.scrollTop;
        const ratio = (scrollTop / (document.body.scrollHeight - window.innerHeight));
        const yaw = (.5 * ratio) + 2.4;
        this.setState({ yaw });
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
        this._mediaQueryList.addListener(this.onMediaChange);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll);
        this._mediaQueryList.removeListener(this.onMediaChange);
    }

    render() {
        return this.state.showAnimation ? <div className="fixed-background__component">
            <FloorAnimation yaw={this.state.yaw} color="#000" />
            <div className="__cover"></div>
        </div> : null;
    }
}
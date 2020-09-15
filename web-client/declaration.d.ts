declare module '*.jpg';
declare module '*.png';
declare module '*.svg';
declare module '*.webp';

export { }
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__: Function;
    }

    interface Process {
        env: {
            NODE_ENV: 'development' | 'production';
        }
    }

    const process: Process;
}
import * as React from 'react';

export type ProjectsContext = {
    [project: string]: {
        element: Element;
        visible: boolean;
    };
}

const defaultContext: ProjectsContext = {};

export const projectsContext = React.createContext(defaultContext);

class ComponentsIntersectionManager {
    private _observer = new IntersectionObserver(this._onIntersection.bind(this), {});
    private _registeredComponents: ProjectsContext = {};

    constructor(private _context: React.Context<ProjectsContext>) {}

    private _onIntersection(entries: IntersectionObserverEntry[]) {
        let visibilityChanged = false;
        entries.forEach(entry => {
            const element = entry.target;
            const key = this._getKeyByElement(element);
            if (key !== null) {
                const component = this._registeredComponents[key];
                if (!component.visible) {
                    if (entry.isIntersecting) {
                        component.visible = true;
                        visibilityChanged = true;
                        this._observer.unobserve(element);
                    }
                }
            }
        })
        if (visibilityChanged && this._provider)
            this._provider(this);
    }

    private _getKeyByElement(element: Element) {
        return Object.keys(this._registeredComponents)
            .find(key => this._registeredComponents[key].element === element);
    }

    private _provider: ((intersectionManager: ComponentsIntersectionManager) => any) | null = null;
    registerProvider(callback: (intersectionManager: ComponentsIntersectionManager) => any) {
        this._provider = callback;
    }

    get components() {
        return this._registeredComponents;
    }

    register(key: string, element: Element) {
        if (!this._registeredComponents[key]) {
            this._registeredComponents[key] = {
                element,
                visible: false
            };
            this._observer.observe(element);
        }
    }

    unregister(key: string) {
        const {[key]: registeredComponent, ...otherRegisteredComponents} = this._registeredComponents;
        this._registeredComponents = otherRegisteredComponents;
    }

    isVisible(key: string) {
        return this._registeredComponents[key] && this._registeredComponents[key].visible;
    }
}

export const intersectionManager = new ComponentsIntersectionManager(projectsContext);
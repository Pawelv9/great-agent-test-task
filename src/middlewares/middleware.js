import properties$ from 'mock';

export const propertiesMiddleware = store => next => action => {
    properties$
        .subscribe((data) => {
            store.dispatch(loadDataAction(data))
        })
    next(action)
};



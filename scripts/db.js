var db = {
    name: 'KLib',
    version: 1,
    instance: {},
    storeNames: {
        games: 'games',
        platforms: 'platforms'
    },
    defaultErrorHandler: function (e) {
        console.log(e);
    },
    setDefaultErrorHandler: function (request) {
        if ('onerror' in request) {
            request.onerror = db.defaultErrorHandler;
        }
        if ('onblocked' in request) {
            request.onblocked = db.defaultErrorHandler;
        }
        if ('onabort' in request) {
            request.onabort = db.defaultErrorHandler;
        }
    }
};
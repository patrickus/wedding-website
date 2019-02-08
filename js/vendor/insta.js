;(function(exports) {
    console.log('hereee');
    exports.userFeed = new Instafeed({
        get: 'tagged',
        tagName: 'awesome',
        clientId: 'c77bdcdf9ab6471e9b71d591e76299f5',
        accessToken: '0978c7fef5774f81b168820b35e042e7'
    });

    exports.scrape = simpleInstagramScrape('cats')
        .then(function(photos) {
            console.log(photos);
        })
})(this);
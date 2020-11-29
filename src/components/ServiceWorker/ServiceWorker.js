import React from 'react'

function ServiceWorker() {
    return (
        <div>
            This is Service worker page
        </div>
    )
}

export default ServiceWorker;
//now there is no service worker when we run create-react-app

// because there is a workbox-webpack-plugin (//named GenerateSw//that generate Service worker)
//that comes integrated with the production build of the CRA(create-react-app)
//when we run npm run build that plugin genrante Service worker 
//all static assets are preCache when service worker is installed
//HTML+CSS+JS+Images
//when we rebuild the project the plugin update the cache

//workbox also adds a route ,so it can respond to fetch events
//which means it adds a fetch listener to the service worker that respond to the network request
//when n/w goes offline service worker first intercept the network request from cache first
//if data is not found in cache then fall back to n/w and send back the response
//to insure that web app is fast on slow and unrelable n/ws
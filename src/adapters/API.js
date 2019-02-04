// Refactored API class
// Added robust fetch pattern: https://css-tricks.com/using-fetch/
// We're assuming that your backend will only ever return valid JSON.

class BACKENDAPI {
    constructor(env) {
        const baseURL = env === 'dev'
            ? 'http://localhost:3000'
            : 'https://travel-bug-api.herokuapp.com'

        this.urls = {
            signin: baseURL + '/signin',
            signup: baseURL + '/signup',
            wishlistedHotels: baseURL + '/wishlisted_hotels',
            hotels: baseURL + '/hotels',
            wishlist: (user_id) => baseURL + '/users/' + user_id + '/wishlist/'
        }
    }

    static handleResponse(response) {
        return response.json()
            .then(json => {
                if (response.ok) {
                    return json;
                } else {
                    const error = Object.assign(
                        {},
                        json,
                        {
                            status: response.status,
                            statusText: response.statusText
                        }
                    )
                    return Promise.reject(error)
                }
            })
    }

    static createRequest(url, method="GET", data={}, auth=false) {
        const headers = new Headers({'Content-Type': 'application/json'})
        if (auth) headers.append('Authorization', localStorage.getItem('token'))
        const request = new Request(
                url,
                {
                    method: method,
                    headers: headers,
                    body: method === 'GET' ? null : JSON.stringify(data)
                }
            );
        return request;
    }

    createUrl = (endpoint, id=null) => {
        if (typeof this.urls[endpoint] === 'function') {
            return this.urls[endpoint](id)
        } else if (id !== null) {
            return this.urls[endpoint] + '/' + id
        } else {
            return this.urls[endpoint]
        }
    }

    signup = (email, password) => {
        const data = { email:email, password:password }
        const url = this.createUrl('signup')
        return fetch(BACKENDAPI.createRequest(url, 'POST', data))
            .then(BACKENDAPI.handleResponse)
    }

    signin = (email, password) => {
        const data = { email:email, password:password }
        const url = this.createUrl('signin')
        return fetch(BACKENDAPI.createRequest(url, 'POST', data))
            .then(BACKENDAPI.handleResponse)
    }

    fetchWishlist = (user_id) => {
        const data = { user_id:user_id }
        const url = this.createUrl('wishlist', user_id)
        return fetch(BACKENDAPI.createRequest(url, 'GET', data, true))
            .then(BACKENDAPI.handleResponse)
    }

    saveUsersWishlistedHotels = (hotel) => {
        const data = { hotel:hotel }
        const url = this.createUrl('wishlistedHotels')
        return fetch(BACKENDAPI.createRequest(url, 'POST', data, true))
            .then(BACKENDAPI.handleResponse)
    }

    removeUsersWishlistedHotels = (hotel) => {
        const data = { hotel:hotel }
        const url = this.createUrl('wishlistedHotels', hotel.id)
        return fetch(BACKENDAPI.createRequest(url, 'DELETE', data, true))
            .then(BACKENDAPI.handleResponse)
    }

    updateWishlistedHotel = (hotel) => {
        const data = {
            note: hotel.note,
            checklist_items: hotel.checklist_items
        }
        const url = this.createUrl('wishlistedHotels', hotel.id)
        return fetch(BACKENDAPI.createRequest(url, 'PATCH', data, true))
            .then(BACKENDAPI.handleResponse)
    }

    getHotels = () => {
        const url = this.createUrl('hotels')
        return fetch(BACKENDAPI.createRequest(url))
            .then(BACKENDAPI.handleResponse)
    }
}

const API = new BACKENDAPI(process.env.REACT_APP_STAGE)

export default API;
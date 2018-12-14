class API {


  static signin (email, password) {
    return fetch(API.signinURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password
      })
    }).then(resp => resp.json())
  }


  static signup (email, password) {
    return fetch(API.signupURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        password: password
      })
    }).then(resp => {
      if (resp.ok) {
        return resp.json()
      } else {
        return Promise.reject(resp)
      }
    })
  }

   static validate (token) {
    return fetch(API.validateURL, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    }).then(resp => resp.json())
  }

   static getItems () {
    const token = localStorage.getItem('token')
    return fetch(API.itemsURL, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    }).then(resp => resp.json())
  }

  static fetchWishlist (user) {
    return fetch(API.baseURL + '/users/' + user.id + '/wishlist/', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
  }

  static removeUsersWishlistedHotels (hotel) {
    return fetch(API.wishlistedHotels + '/' + hotel.id, {
      method: 'DELETE'
    })
  }

  static saveUsersWishlistedHotels (hotel, user) {
    return fetch(API.wishlistedHotels, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        hotel: hotel,
        user: user
      })
    })
  }

  static updateWishlistedHotel (wishlistedHotel) {
    if (wishlistedHotel.id === undefined) return;
    return fetch(API.wishlistedHotels + '/' + wishlistedHotel.id, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        note: wishlistedHotel.note,
        checklist_items: wishlistedHotel.checklist_items
      })
    })
  }

}


process.env.REACT_APP_STAGE === 'dev' 
  ? API.baseUrl = 'http://localhost:3000'
  : API.baseUrl = 'https://travel-bug-api.herokuapp.com'

API.signinURL = API.baseUrl + '/signin'
API.validateURL = API.baseUrl + '/validate'
API.itemsURL = API.baseUrl + '/items'
API.signupURL = API.baseUrl + '/signup'
API.wishlistedHotels = API.baseUrl + '/wishlisted_hotels'



export default API




 
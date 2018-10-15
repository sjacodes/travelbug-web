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
    }).then(resp => resp.json())
  }


  static fetchWishlist (user) {
    return fetch(API.baseURL + '/users/' + user.id + '/wishlist/', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
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

API.baseURL = 'http://localhost:3000'
API.signinURL = API.baseURL + '/signin'
// API.validateURL = API.baseURL + '/validate'
// API.itemsURL = API.baseURL + '/items'
API.signupURL = API.baseURL + '/signup'
API.wishlistedHotels = API.baseURL + '/wishlisted_hotels'

export default API


 // static validate (token) {
  //   return fetch(API.validateURL, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: token
  //     }
  //   }).then(resp => resp.json())
  // }

  // static getItems () {
  //   const token = localStorage.getItem('token')
  //   return fetch(API.itemsURL, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: token
  //     }
  //   }).then(resp => resp.json())
  // }
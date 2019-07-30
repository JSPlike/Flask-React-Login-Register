import axios from 'axios'

export const register = newUser => {
  return axios
    .post("users/register", {
      name: newUser.name,
      password: newUser.password
    })
    .then(response => {
      console.log("Resgistered")
    })
}

export const login = user => {
  return axios
    .post("users/login", {
      name: user.name,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data.token)
      return response.data.token
    })
    .catch(err => {
      console.log(err)
    })
}
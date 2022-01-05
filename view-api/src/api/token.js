export function setToken(token){
    localStorage.setItem('TOKEN',token)
}

export function getToken(token){
    return localStorage.getItem('TOKEN')
}

export function removeToken(token){
    localStorage.removeItem('TOKEN')
}
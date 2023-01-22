export function getUserData() {
    return JSON.parse(sessionStorage.getItem('user'));
}

export function setUserData(user) {
    sessionStorage.setItem('user', user);
}

export function removeUserData() {
    sessionStorage.removeItem('user');
}


const getToken = (key) => localStorage.getItem(key);
const removeToken = (key) => localStorage.removeItem(key)
const setToken =(key, value) => localStorage.setItem(key, value)


export { getToken, removeToken, setToken };

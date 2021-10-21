export function getList() {
    return fetch('https://shoppaholix.herokuapp.com/api/v1/products/')
        .then(data => data.json())
}
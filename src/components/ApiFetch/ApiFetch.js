export function getList() {
    return fetch('http://shoppaholix.herokuapp.com/api/v1/products/')
        .then(data => data.json())
}
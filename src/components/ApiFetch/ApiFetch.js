export function getList() {
    return fetch('http://localhost:8000/api/v1/products/')
        .then(data => data.json())
}
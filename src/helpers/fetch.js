const baseUrl = 'http://localhost:5010';

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

export const fetchWithoutToken = (endpoint, data, method = 'GET') => {
    const url = `${baseUrl}/${endpoint}`;
    if( method == 'GET' ){
        return fetch(url);
    }else{
        return fetch(url, {
            method,
            headers,
            body: JSON.stringify(data)
        })
    }
}

export const fetchWithToken = (endpoint, data, method = 'GET') => {
    const url = `${baseUrl}/${endpoint}`;
    const token = localStorage.getItem('token') || '';
    if( method == 'GET' ){
        return fetch(url, {
            method,
            headers: {
                ...headers,
                'Authorization': 'Bearer ' + token
            }
        });
    }else{
        return fetch(url, {
            method,
            headers: {
                ...headers,
                'Authorization': 'Bearer ' + token
            },         
            body: JSON.stringify(data)
        })
    }  
} 
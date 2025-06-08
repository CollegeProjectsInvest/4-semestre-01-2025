export async function logoutService() {
    const response = await fetch('http://localhost:8080/api/user/logout', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    });

    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.error);
    }

    return json;
}

/**
 *
 * @param {{ email: string, password: string }} params
 * @returns {Promise<string>}
 */
export async function loginService({ email, password }) {
    const response = await fetch('http://localhost:8080/api/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
    });

    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.error);
    }

    return json;
}

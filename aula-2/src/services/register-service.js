/**
 * @param {{ email: string, password: string, confirmationPassword: string }} params
 * @returns {Promise<string>}
 */
export async function registerService({ email, password, confirmationPassword }) {
    const response = await fetch('http://localhost:8080/api/user/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, confirmationPassword }),
        credentials: 'include',
    });

    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.error);
    }

    return json;
}

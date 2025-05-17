export async function loginService(email, password) {
    const response = await fetch('http://localhost:8080/api/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    const json = await response.json();

    console.log(json);

    return json;
}

export async function createTaskService({ title }) {
    const response = await fetch('http://localhost:8080/api/task/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title }),
        credentials: 'include',
    });

    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.error);
    }

    return json;
}

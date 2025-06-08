export async function updateTaskService({ id, finished }) {
    const response = await fetch('http://localhost:8080/api/task/update', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, finished }),
        credentials: 'include',
    });

    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.error);
    }

    return json;
}

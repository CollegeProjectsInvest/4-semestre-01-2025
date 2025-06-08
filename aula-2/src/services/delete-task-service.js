export async function deleteTaskService({ id }) {
    const response = await fetch('http://localhost:8080/api/task/delete', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
        credentials: 'include',
    });

    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.error);
    }

    return json;
}

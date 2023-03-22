

export function ModifyById<T>(id: string, body: T, endpoint: string, method: string): Promise<T|null> {
    const url: string = `http://localhost:8080/${endpoint}/${id}`;
    const option: {} = {
        method: method,
        header: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
    }
    
    return fetch(url, option)
    .then((response: Response) => {
        if (!response.ok) {
            throw new Error;
        }
        return response.json() as Promise<T>
    })
    .catch ((e) => {
        console.log(e)
        return null;
    })
}
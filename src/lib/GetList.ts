
export function getList<T>(endpoint: string, key: string): Promise<T[]> {
    const url = `http://localhost:8080${endpoint}`;

    return fetch(url)
    .then((response: Response): Promise<any> => {
        if (!response.ok) {
            throw Error;
        } // {...}
        return response.json() as Promise<{_embedded: any}>;//{_embedded: anything}
    })
    .then((json: any): Promise<any> => {
        return json._embedded as Promise<{key:T[]}>; //{xxxList:[]}
    })
    .then((insideEmbedded: any): Promise<T[]> => {
        return insideEmbedded[key]; // []
    })
    .catch((error: any): any => {
        console.log(error);
        return [];
    });
}

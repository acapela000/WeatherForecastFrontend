import { Role, User, WeatherForecast } from "@/components/Database";

function getList<T>(endpoint: string, key: string, page: number, size: number, sort: string): Promise<T[]> {
    const urlSearchParam: URLSearchParams = new URLSearchParams({
        page: page.toString(),
        size: size.toString(),
        sort: sort
    });
    const url = `http://localhost:8080/${endpoint}?${urlSearchParam.toString()}`;

    return fetch(url)
    .then((response: Response): Promise<any> => {
        if (!response.ok) {
            throw Error;
        } 
        return response.json() as Promise<{_embedded: any}>;//{_embedded: anything}
    })
    .then((json: any): Promise<any> => {
        return json._embedded as Promise<{ [key: string]: T[] }>; //{xxxList:[]}
    })
    .then((insideEmbedded: any): Promise<T[]> => {
        return insideEmbedded[key]; // []
    })
    .catch((error: any): any => {
        console.log(error);
        return [];
    });
}

export function GetUserList(page: number = 0, size: number = 7, sort: string = ""): Promise<User[]> {
    return getList<User>('user', 'userList', page, size, sort);
}

export function GetRoleList(page: number = 0, size: number = 7, sort: string = ""): Promise<Role[]> {
    return getList<Role>('role', 'roleList', page, size, sort);
}

export function GetLocationList(page: number = 0, size: number = 7, sort: string = ""): Promise<Location[]> {
    return getList<Location>('location', 'locationList', page, size, sort);
}

export function GetWFList(page: number = 0, size: number = 7, sort: string = ""): Promise<WeatherForecast[]> {
    return getList<WeatherForecast>('wf', 'wfList', page, size, sort);
}
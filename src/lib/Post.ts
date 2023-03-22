import { Location, User, Role, WeatherForecast } from "@/components/Database";


function post<T>(body: T, endpoint: string): Promise<any> {
    const url: string = `http://localhost:8080/${endpoint}`
    const option: {} = {
        method: "POST",
        header: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
    }

    return fetch(url, option)
    .then((response: Response) => {
        if (!response.ok) {
            throw new Error;
        }
        return response.json();
    })
    .catch ((e) => {
        console.log(e)
    })
}

export function PostUser(user: User): Promise<any>  {
    return post<User>(user, 'user');
}

export function PostWF(wf: WeatherForecast): Promise<any>  {
    return post<WeatherForecast>(wf, 'wf');
}

export function PostRole(role: Role): Promise<any>  {
    return post<Role>(role, 'role');
}

export function PostLocation(location: Location): Promise<any>  {
    return post<Location>(location, 'location');
}
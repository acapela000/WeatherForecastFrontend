import { Location, Role, User, WeatherForecast } from '@/components/Database';


function GetById<T> (id: string, endpoint: string): Promise<T|null> {
    const url: string = `http://localhost:8080/${endpoint}/${id}`;
    return fetch(url)
    .then((response: Response) => {
        if (!response.ok) {
            throw new Error;
        }
        return response.json() as Promise<T>;
    })
    .catch((error) => {
        console.log(error)
        return null;
    });
}

export function GetUserById(id: string): Promise<User|null> {
    return GetById<User> (id, 'user');
}

export function GetWFById(id: string): Promise<WeatherForecast|null> {
    return GetById<WeatherForecast> (id, 'wf');
}

export function GetRoleById(id: string): Promise<Role|null> {
        return GetById<Role> (id, 'role');
}

export function GetLocationById(id: string): Promise<Location|null> {
        return GetById<Location> (id, 'location');
}
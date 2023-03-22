
import { Location, User, WeatherForecast } from '@/components/Database';
import { Role } from './../components/Database';

function deleteById<T>(id: string): Promise<any> {
    const url: string = `http://localhost:8080/${id}`;
    const option: {} = {
        method: "DELETE"
    }

    return fetch(url, option)
    .then((response: Response) => {
        if(!response.ok) {
            throw new Error;
        }
        return response.json()
    })
    .catch((e) => {
        console.log(e)
    })
}

export function DelUserById(id: string): Promise<any> {
    return deleteById<User>(id);
}

export function DelRoleById(id: string): Promise<any> {
    return deleteById<Role>(id);
}

export function DelLocationById(id: string): Promise<any> {
    return deleteById<Location>(id);
}

export function DelWFById(id: string): Promise<any> {
    return deleteById<WeatherForecast>(id);
}


import { Location, User, WeatherForecast } from '@/components/Database';
import { Role } from '@/components/Database';

function deleteById<T>(id: string, endpoint: string): Promise<any> {
    const url: string = `${process.env.API}${endpoint}/${id}`;
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
    return deleteById<User>(id, "user");
}

export function DelRoleById(id: string): Promise<any> {
    return deleteById<Role>(id, "role");
}

export function DelLocationById(id: string): Promise<any> {
    return deleteById<Location>(id, "location");
}

export function DelWFById(id: string): Promise<any> {
    return deleteById<WeatherForecast>(id, "wf");
}

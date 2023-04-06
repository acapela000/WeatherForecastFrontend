import { User, Role, WeatherForecast, Location } from "@/components/Database";
import { ModifyById } from "./Share";


export function PutUserById(id: string, user: User): Promise<User|null> {
    return ModifyById<User>(id, user, 'user', "PUT");
}

export function PutRoleById(id: string, role: Role): Promise<Role|null> {
    return ModifyById<Role>(id, role, 'role', "PUT");
}

export function PutLocationById(id: string, location: Location): Promise<Location|null> {
    return ModifyById<Location>(id, location, 'location', "PUT");
}

export function PutWFById(id: string, wf: WeatherForecast): Promise<WeatherForecast|null> {
    return ModifyById<WeatherForecast>(id, wf, 'wf', "PUT");
}
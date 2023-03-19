import { Role } from '@/components/Database';


export function GetRoleById(id: string): Promise<Role> {

    const url: string = `http://localhost:8080/role/${id}`; 
    const promiseRole: Promise<Role> = fetch(url)
    .then((response: Response) => {
        if (!response.ok) {
            throw new Error;
        }
        return response.json() as Promise<Role>;
    })

    return promiseRole;

}
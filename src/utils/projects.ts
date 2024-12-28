
interface Project {
    status : 'pending' | 'working' | 'ready',
    title: string,
    description: string,
    stack : string[],
    url: string
}

export const projects : Project[] = [

    {
        status: "pending",
        title: 'Placeholder',
        description: 'Placeholder',
        stack: [
            'Rust',
            'Actix'
        ],
        url: 'http://localhost:80'
    }

] 
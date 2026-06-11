export enum Role {
    USER,
    ADMIN
}


export interface User {
    id: string
    name?: string,
    email: string
    emailVerified?: Date,
    password: string
    image: string,
    role: Role
    createdAt: Date,
    githubId?: string,
    googleId?: string,

    projects: Project[]
    tasks: Task[]
    timeSessions: TimeSession[]

}
export interface login {
    email:string;
    password:string
} 

export interface register {
    email:string;
    password:string;
    name:string
} 

export interface verifyEmail{
    userId:string;
    secret:string
}
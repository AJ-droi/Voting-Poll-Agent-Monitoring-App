export interface register{
    name:string;
    email:string;
    password:string
}

export interface changePassword{
    oldpassword:string;
    newpassword:string
}

export interface updatePhone{
    phone:string;
    password:string
}

export interface resetPassword{
    email:string
    url:string
}

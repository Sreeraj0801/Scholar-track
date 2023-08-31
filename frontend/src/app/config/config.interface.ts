export   interface adminLogin {
email:string,
password:string
}

export interface adminAuthResponse {
    email:string,
    accessToken:string,
    message:string
}
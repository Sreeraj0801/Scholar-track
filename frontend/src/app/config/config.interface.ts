export   interface adminLogin {
email:string,
password:string
}

export interface adminAuthResponse {
    email:string,
    accessToken:string,
    message:string
}

export interface Domain {
    domain: string;
    message: string;
    __v: number;
    _id: string;
  }

  
export interface Qualification {
    qualification: string;
    message: string;
    __v: number;
    _id: string;
  }
  
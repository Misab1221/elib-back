export interface BasicResponse {
    status:boolean,
    message:string
}
export interface LoginResponse extends BasicResponse{
    token?:string
}
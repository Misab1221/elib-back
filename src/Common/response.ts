export interface BasicResponse {
    status:boolean,
    message:string
}
export interface LoginResponse extends BasicResponse{
    token?:string
}
export interface Book {
    book_id:string,
    book_title:string,
    author:string,
    publications:string,
    edition:string,
    year:string,
    price:string
}
export interface BookResponse extends BasicResponse {
    book?:Book;
}
export interface BooksResponse extends BasicResponse {
    books?:Book[];
}

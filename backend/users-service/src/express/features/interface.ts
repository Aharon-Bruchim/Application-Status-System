/* v8 ignore start */
export interface User {
    name: string;
    IDfNumber: string;
    isAdmin: boolean;
}

export interface UserDocument extends User {
    _id: string;
}

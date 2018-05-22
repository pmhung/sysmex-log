export class User {
    public UserName: string;
    public Password: string;
    public isAuthor: boolean;
    public role: number;
    constructor() {
        this.UserName = '';
        this.Password = '';
        this.isAuthor = false;
        this.role = -1;
    }
}
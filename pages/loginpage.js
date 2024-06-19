export default class Login{
    constructor(page){
        this.page=page;
        this.username = page.locator("#username");
        this.password = page.locator("#password");
        this.loginBtn = page.locator("button[type='submit']");
    }

    async gotoApplication(){
        this.page.goto("./");
    }
    
    async loginIntoApplication(username, password){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginBtn.click();
    }

    async autoLoginWithValidCredentials(){
        await this.username.fill("deepak.mittal@esha.com");
        await this.password.fill("Test@123");
        await this.loginBtn.click();
    }
}

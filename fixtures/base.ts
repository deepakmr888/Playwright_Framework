import {test as base, expect} from "@playwright/test";
import  Login  from "../pages/loginpage.js";

type MyFixtures = {
    loginPage: Login
}

exports.expect = expect
exports.test = base.extend<MyFixtures>({
    loginPage: async ({page}, use)=>{
        await use (new Login(page));
    }
})
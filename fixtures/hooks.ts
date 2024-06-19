const {test, expect} = require("./base.ts");

exports.expect = expect
exports.test = test.extend({
    defaultLogin: async ({loginPage}, use)=>{
        await loginPage.gotoApplication();
        await loginPage.autoLoginWithValidCredentials();
        await use(loginPage);
    }
})
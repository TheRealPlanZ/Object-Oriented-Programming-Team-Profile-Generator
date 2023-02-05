const Engineer = require('../lib/Engineer');

test("Can create a github account", () => {
    const testGithub = "GitHubUser";
    const e = new Engineer("Ana", 1, "test@test.com", testGithub);
    expect(e.github).toBe(testGithub);
});

test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Ana", 1, "test@test.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Ana", 1, "test@test.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});
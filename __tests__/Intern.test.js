const Intern = require('../lib/Intern');

test("Can set school", () => {
    const testValue = "KSU";
    const e = new Intern("Zack", 1, "test@email", testValue);
    expect(e.school).toBe(testValue);
});

test("OfficeNumber will return office number", () => {
    const testValue = "KSU";
    const e = new Intern("Zack", 1, "test@email", testValue);
    expect(e.getSchool()).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Zack", 1, "test@email", "KSU");
    expect(e.getRole()).toBe(testValue);
});

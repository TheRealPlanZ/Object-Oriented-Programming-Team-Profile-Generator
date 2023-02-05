const Employee = require("../lib/Employee");

test("Can create a new employee.", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
})

test("Name test.", () => {
    const name = "Bob";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
})

test("ID test.", () => {
    const id = 1;
    const employee = new Employee("Bob", id);
    expect(employee.id).toBe(id);
})

test("Email test.", () => {
    const email = "hzdkv@example.com";
    const employee = new Employee("Bob", 1, email);
    expect(employee.email).toBe(email);
})

test("getRole test.", () => {
    const role = "Employee";
    const employee = new Employee("Bob", 1, "hzdkv@example.com");
    expect(employee.getRole()).toBe(role);
})

test("getName test.", () => {
    const name = "Bob";
    const employee = new Employee(name);
    expect(employee.getName()).toBe(name);
})

test("getId test.", () => {
    const id = 1;
    const employee = new Employee("Bob", id);
    expect(employee.getId()).toBe(id);
})

test("getEmail test.", () => {
    const email = "test@test.com";
    const employee = new Employee("Bob", 1, email);
    expect(employee.getEmail()).toBe(email);
})

const Manager = require("../lib/Manager");

test("Can create an oddice number", () => {
    const OfficeNumber = 2;
    const manager = new Manager("Foo", 1, "test@email", OfficeNumber);
    expect(manager.officeNumber).toBe(OfficeNumber);
});

test("getRole() should return \"Manager\"", () => {
    const role = "Manager";
    const manager = new Manager("Foo", 1, "test@email", 100);
    expect(manager.getRole()).toBe(role);
} );

test("Can get office number via getOffice()", () => {
    const OfficeNumber = 100;
    const manager = new Manager("Foo", 1, "test@email", OfficeNumber);
    expect(manager.getOfficeNumber()).toBe(OfficeNumber);
} );

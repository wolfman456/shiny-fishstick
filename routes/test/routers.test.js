const routersTest = require("../routes");
const request = require("supertest");
const baseURL = "http://localhost:3000/api";
// This test fails because 1 !== 2
it("Testing to see if Jest works", () => {
    expect(1).toBe(1);
});


describe("GET /hello", ()=>{
    const newEmployee = {
        id: crypto.randomUUID(),
        "name": "bob",
        "age" : 25,
        "salary":true,
        "title": "agent",
    }
    beforeAll(async ()=>{
        await request(baseURL).post("/post").send(newEmployee)
    })
    afterAll(async () => {
        await request(baseURL).delete(`/todo/${newEmployee.id}`)
    })
    it("should return 200", async () => {
        const response = await request(baseURL).get("/getAll");
        expect(response.statusCode).toBe(200);
    });
    it('should return 200', async ()=> {
        const response = await request(baseURL).get("/hello");
        expect(response.statusCode).toBe(200);
    });
})

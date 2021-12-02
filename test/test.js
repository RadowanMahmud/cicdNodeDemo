const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
    it("responds with Hello World!", (done) => {
        request(app).get("/").expect("Hello World!", done);
    })
});

describe("GET /add/8/8", () => {
    it("The sum is : 16", (done) => {
        request(app).get("/add/8/8").expect("The sum is : 16", done);
    })
});

describe("GET /substract/8/6", () => {
    it("The result is : 2", (done) => {
        request(app).get("/substract/8/6").expect("The result is : 2", done);
    })
});
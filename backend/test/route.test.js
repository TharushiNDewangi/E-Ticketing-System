const app = require("../server");
const mongoose = require("mongoose");
const supertest = require("supertest");

describe("Sample Test", () => {
    it("should test that true === true", () => {
      expect(true).toBe(true);
    });
  });

test("test add Route without relevent data", async () => {
    const result = await supertest(app)
      .post("api/route/create")
      .send({});
    expect(result.statusCode).toBe(500);
  });

  test("test Routes controller with relevent data", async () => {
    const result = await supertest(app)
      .post("api/route/create")
      .send({
        routeId:1,
        startingPoint:"Test Test",
        endingPoint: "testCat",
        totalkm:1,
        chargersPerKm:2, 
        maxCreditLimit:3
       
        
      });
    expect(result.statusCode).toBe(201);
  });
  
test("test getroute controller ", async () => {
    const result = await supertest(app)
      .get("api/route/viewall")
      .send({});
    expect(result.statusCode).toBe(200);
  });
  
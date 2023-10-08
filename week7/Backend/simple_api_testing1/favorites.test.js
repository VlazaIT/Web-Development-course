const { request, expect } = require("./config");

describe("Favorites API", function() {

  describe("POST /favorites", function() {

    describe("when creating a favorite without authentication", function() {
      it("should return a 401 status code", async function() {
        const response = await request.post("/favorites").send({
          airport_id: "YBR",
          note: "Going to Canada",
        });

        expect(response.status).to.eql(401);
      });
    });

    describe("when retrieving favorite airports with authentication", function() {
      it("should return a 200 status code", async function() {
        const response = await request
          .get("/favorites")
          .set("Authorization", "Bearer token=NTyqLpqBW2dqg1Fq7ud17n1x");
        
        expect(response.status).to.eql(200);
      });
    });

    describe("when saving and managing favorite airports with authentication", function() {
      let favoriteId;

      it("should allow a user to save their favorite airports", async function() {
        const response = await request
          .post("/favorites")
          .set("Authorization", "Bearer token=NTyqLpqBW2dqg1Fq7ud17n1x")
          .send({
            airport_id: "YBR",
            note: "Going to Canada",
          });

        expect(response.status).to.eql(201);
        expect(response.body.data.attributes.airport.name).to.eql(
          "Brandon Municipal Airport"
        );
        expect(response.body.data.attributes.note).to.eql("Going to Canada");

        favoriteId = response.body.data.id;
      });

      it("should allow a user to update the note of the saved favorite airport", async function() {
        const response = await request
          .put(`/favorites/${favoriteId}`)
          .set("Authorization", "Bearer token=NTyqLpqBW2dqg1Fq7ud17n1x")
          .send({
            note: "My usual layover when visiting family and friends",
          });

        expect(response.status).to.eql(200);
        expect(response.body.data.attributes.note).to.eql(
          "My usual layover when visiting family and friends"
        );
      });

      it("should allow a user to delete the saved favorite airport", async function() {
        const response = await request
          .delete(`/favorites/${favoriteId}`)
          .set("Authorization", "Bearer token=NTyqLpqBW2dqg1Fq7ud17n1x");

        expect(response.status).to.eql(204);
      });

      it("should confirm that the favorite airport record was deleted", async function() {
        const response = await request
          .get(`/favorites/${favoriteId}`)
          .set("Authorization", "Bearer token=NTyqLpqBW2dqg1Fq7ud17n1x");

        expect(response.status).to.eql(404);
      });
    });
  });
});

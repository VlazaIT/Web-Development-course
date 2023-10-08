// workout.test.js

const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);
const User = require("../models/userModel");
const Workout = require("../models/workoutModel");
const workouts = require("./data/workouts.js");

let token = null;

beforeAll(async () => {
  await User.deleteMany({});
  const result = await api
    .post("/api/user/signup")
    .send({ email: "mattiv@matti.fi", password: "R3g5T7#gh" });
  token = result.body.token;
});

describe("Workouts API", () => {
  beforeEach(async () => {
    await Workout.deleteMany({});
    await api
      .post("/api/workouts")
      .set("Authorization", "bearer " + token)
      .send(workouts[0])
      .send(workouts[1]);
  });

  test("Workouts are returned as JSON", async () => {
    await api
      .get("/api/workouts")
      .set("Authorization", "bearer " + token)
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("New workout can be added", async () => {
    const newWorkout = {
      title: "testworkout",
      reps: 10,
      load: 100,
    };
    await api
      .post("/api/workouts")
      .set("Authorization", "bearer " + token)
      .send(newWorkout)
      .expect(201);
  });
});

describe("Workouts CRUD operations", () => {

  test("Workout can be deleted", async () => {
    const workoutsBefore = await api.get("/api/workouts").set("Authorization", "bearer " + token);
    const workoutToDelete = workoutsBefore.body[0];
    
    await api
      .delete(`/api/workouts/${workoutToDelete.id}`)
      .set("Authorization", "bearer " + token)
      .expect(204);

    const workoutsAfter = await api.get("/api/workouts").set("Authorization", "bearer " + token);
    expect(workoutsAfter.body).toHaveLength(workoutsBefore.body.length - 1);
  });

  test("Workout can be updated", async () => {
    const newWorkout = {
      title: "Updated title",
      reps: 20,
      load: 200,
    };

    const workoutsBefore = await api.get("/api/workouts").set("Authorization", "bearer " + token);
    const workoutToUpdate = workoutsBefore.body[0];
    
    await api
      .patch(`/api/workouts/${workoutToUpdate.id}`)
      .set("Authorization", "bearer " + token)
      .send(newWorkout)
      .expect(200);

    const updatedWorkout = await api.get(`/api/workouts/${workoutToUpdate.id}`).set("Authorization", "bearer " + token);
    expect(updatedWorkout.body.title).toBe("Updated title");
  });

  test("Specific workout can be fetched", async () => {
    const workoutsBefore = await api.get("/api/workouts").set("Authorization", "bearer " + token);
    const workoutToFetch = workoutsBefore.body[0];
    
    const fetchedWorkout = await api.get(`/api/workouts/${workoutToFetch.id}`).set("Authorization", "bearer " + token);
    expect(fetchedWorkout.body.id).toBe(workoutToFetch.id);
  });
});

afterAll(() => {
  mongoose.connection.close();
});

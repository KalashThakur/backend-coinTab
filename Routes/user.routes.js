// import fetch from 'node-fetch'; //fetch
// let fetch = require("node-fetch");

const { Router } = require("express");
const { UserModel } = require("../Models/UserModel");
let axios = require("axios");
axios = axios.default;
const userRoute = Router();

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

userRoute.get("/", async (req, res) => {
  const results = await UserModel.find();
  res.send(results);
});

const getData = async () => {
  let fetchData = await fetch("https://randomuser.me/api/", {
    method: "GET",
    Headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  let d = await fetchData.json();
  return d;
};

// **********POST*********
userRoute.post("/", async (req, res) => {
  let myPromise = new Promise(function (myResolve, myReject) {
    // "Producing Code" (May take some time)

    myResolve(() => {
      let allData = getData();
      allData.then(async (res) => {
        console.log(res.results[0].name.title);
        UserModel.create({
          // ...res.results
          gender: res.results[0].gender,
          name: { ...res.results[0].name },
          location: { ...res.results[0].location },
          email: res.results[0].email,
          login: { ...res.results[0].login },
          dob: { ...res.results[0].dob },
          registered: { ...res.results[0].registered },
          phone: res.results[0].phone,
          cell: res.results[0].cell,
          picture: { ...res.results[0].picture },
        });
      });
    }); // when successful
    myReject(); // when error
  });
  myPromise.then((res) => res());
  res.send("done");
});

// **********DELETE*********
userRoute.delete("/delete", async (req, res) => {
  const deletedData = await UserModel.deleteMany({});
  return res.send({ message: "deleted data" });
});

module.exports = userRoute;

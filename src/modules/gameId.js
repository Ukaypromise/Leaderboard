fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/", {
  method: "POST",
  body: JSON.stringify({
    name: "Chess",
  }),
  headers: {
    "content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((data) => data);
// Store ID

const id = "YTuDTJxi9F99uEyeQbau";

export default id;
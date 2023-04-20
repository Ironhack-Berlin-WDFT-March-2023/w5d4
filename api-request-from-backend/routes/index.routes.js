const express = require('express');
const router = express.Router();
const axios = require("axios")

/* GET home page */
// router.get("/", (req, res, next) => {
//   // Request data from API and render it in the view
//   axios.get("https://www.boredapi.com/api/activity")
//       .then(response => {
//         console.log(response)

//         const activity = response.data.activity
      
//         // Render data in the view
//         res.render("index", { activity })
//       })
//       .catch(err => next(err))
// })

router.get("/", (req, res, next) => {
  const name = req.query.name

  axios.get(`https://api.agify.io?name=${name}`)
      .then(response => {
        console.log(response.data)

        const age = response.data.age
      
        // Render data in the view
        res.render("index", { age })
      })
      .catch(err => next(err))
})

module.exports = router;

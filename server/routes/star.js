const express = require('express');
const fs = require('fs');
const router = express.Router();

const JSON_FILE_PATH = "./data/interStellar.json";

function getStars() {
    const starsJson = fs.readFileSync(JSON_FILE_PATH);
    return JSON.parse(starsJson);    
}

router
    .route("/")
    .get((req, res) => { 
        const stars = getStars();
        // const starSamples = stars.map(star => {
        //     return {
        //       name: star.name,
        //       image: star.picture,
        //       samplesForCollection: star.samplesForCollection
        //     };
        //   });
        res.status(200).json(stars);
    })

// router
//     .route("/:id") 
//     .get((req, res) => { 
//         const starId = req.params.id;
        
//         const stars = getStars();
        
//         const foundStar = stars.find((star) => {
//             return star.id === starId;
//         });
//          // respond with 404 if didn't find video
//         if (!foundStar) {
//             return res.status(404).json({ error: "star not found" });
//         }
   
//         return res.status(200).json(foundStar);
//     })

router
    .route("/:name") 
    .get((req, res) => { 
        const starName = req.params.name;
        
        const stars = getStars();
        
        const foundStar = stars.find((star) => {
            return star.name === starName;
        });
         // respond with 404 if didn't find video
        if (!foundStar) {
            return res.status(404).json({ error: `${starName} not found` });
        }
   
        return res.status(200).json(foundStar);
    })

module.exports = router;
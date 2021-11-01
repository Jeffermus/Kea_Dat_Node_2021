const  axios  = require('axios');

module.exports = (app) => {
    app.get("/anime", async(req,res)  =>  {
       
        try {
        // axios.get("https://anime-facts-rest-api.herokuapp.com/api/v1").then(function(result){
        //     res.json(result.data);
        // })
        const result =  await axios.get("https://anime-facts-rest-api.herokuapp.com/api/v1")
        res.json(result.data);

    
        } catch (error) {
            console.log(error)
        }
    })
}




    

const axios = require("axios");
const arguments = require("minimist")(process.argv.slice(2));

(async() => {

    try{
        const response = await axios.get(`${arguments.url}`);
        process.stdout.write(response.data.name.toString())
    }catch(e){
        process.exitCode = 1;
    }

})()




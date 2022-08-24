const childProcess = require("child_process");
const child = 2;

(async() => {
    let children = [];
    for(let i = 0; i< child; i++){
        children.push(childProcess.spawn('node', ['execute.js', '--url=https://my-json-server.typicode.com/typicode/demo/profile']));
    }
    

    let response = children.map((c)=>{
        return new Promise((res)=>{
            c.stdout.on("data", (data)=>{
                console.log(`${c.pid} : ${data}`)
            });
            c.on("exit", (code)=>{
                code === 0 ? res(true): res(false);
            })
        })
    })

    // let responses = await Promise.all(response);

    // if(responses.filter(Boolean).length == responses.length){
    //     console.log("success")
    // }else{
    //     console.log("failure")
    // }

})()



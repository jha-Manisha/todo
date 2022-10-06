const getData = require('../mConnect');

const main = async () => {
    let data = await getData();
 data = await data.insertOne({"full name" : "manisha @ jha"});
console.log(data);
}

main();


const getData = require('../mConnect');


const mainU = async () => {
    let data = await getData();
 data = await data.updateOne({});
console.log(data);
}

mainU();


const fs = require("fs");

const path = "./messages";

/*
fs.writeFile(file, "Hello world", (error) => {
    if(error) console.log(error);
    else console.log("file was saved!");
});
*/

module.exports = {
    data: [],

    init: (data, callback) =>{
        fs.readdir(path, (err, files) => {
        if (err) throw err;

        let cntr=0;
        files.forEach(file => {
            fs.readFile(`${path}/${file}`, "utf8", (err, res) => {
                if (err) throw err;

                data.push(JSON.parse(res));
                ++cntr;
                if (cntr === files.length) {
                    callback();
                }
            });
        });

    });
},
    addItem: (data, item) => data.push(item),
    saveData: (data, callback) => {
        let dateTimeNow = new Date().toISOString();
        fs.writeFile(`${path}/${dateTimeNow}.txt`, JSON.stringify(data), err =>{
            if(err) throw err;
            callback();
        })
    }

};
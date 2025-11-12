const data = [{id: 1, name: "ade", course: "CIT"}];

function addData(newdata){
    if(!newdata){
        console.log("Field are required")
    }
    data.push(newdata);
    return;
}

addData({id: 2, name: "sola", course: "MIT"})

console.log(data)
console.log("hello world")
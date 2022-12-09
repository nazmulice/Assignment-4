var express=require('express');
var multer=require('multer')
app=express();


var storage=multer.diskStorage({
    destination:function (req,file,callBack) {
        callBack(null,'./uploads');
    },
    filename:function (req,file,callBack) {
        callBack(null,file.originalname)
    }
});

var upload=multer({storage:storage}).single('myfile')
app.post('/upload',function (req,res) {
    upload(req,res,function (error) {
            if(error){
                res.send("File Upload Fail")
            }
            else{
                res.send("File Upload Success")
            }
    });
});

app.get("/one",function (req,res) {
    res.end("This is simple string response ");
});

app.post("/two",function (req,res) {
    res.end("This is simple string response ");
});


app.get("/three",function (req,res) {
    res.status(201).end();
})


app.get("/four",function (req,res) {
    let MyJSONArray=[
        {
            name:"Rabbil",
            city:"Dhaka",
            occupation:"Engr."
        },
        {
            name:"Rakib",
            city:"Dhaka",
            occupation:"Pharama"
        },
        {
            name:"Rifat",
            city:"Rangpur",
            occupation:"Student"
        }

    ]
    res.json(MyJSONArray);
})




// Response Redirect
app.get("/Bangladesh",function (req,res) {
    res.redirect("http://localhost:8000/africa")
})


app.get("/africa",function (req,res) {
    res.send("This is india");
})



app.get("/Six",function (req,res) {
    res.append("name","Rabbil Hasan");
    res.append("city","Dhaka");
    res.append("age","30 Years Old");
    res.status(201).end("Hello World");
})



app.listen(8000,function () {
    console.log("Server Run Success")
})

import express from 'express';
const app=express();
//add just below const app=express();
app.use(express.urlencoded({extended:false}))
app.use(express.json())
//create a default route 
app.get('/api/hello',function(httpRequest,httpResponse){
    //res.send("hello world");
    const name=httpRequest.query.name;
    const surname= httpRequest.query.surname;
    httpResponse.json({

        message: "hello Back world" + name + " "+ surname 
    });
    // res.json({
    //     message: "hello Back world"
    // });
    //message: "hello world"+ req.query.name
});
    // app.post('/api/hello',function(req,res){
    //     //res.send("hello world");
    //     res.json({
    //         message: "hello Back world"
    //     });
    app.post('/api/hello',function(httpRequest,httpResponse){
        //res.send("hello world");
        const name=httpRequest.body.name;
        const surname= httpRequest.body.surname;
        httpResponse.json({
    
            message: "hello Back world" + name + " "+ surname 
        });

});
app.listen(3000,function(){
    console.log('Example app listening on port 3000!');
})
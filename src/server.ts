import {App} from "./App";

const port=process.env.PORT||5000;
let app=new App();
app.express.listen(port, function () {
    console.log("server started on port-" + port);
});

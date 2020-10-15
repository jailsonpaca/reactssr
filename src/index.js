import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter,} from "react-router-dom";
import App from './App';
import getData from './components/getData';
getData().then((data)=>{
console.log(data);
});
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    console.log("Is in development!");
    getData().then((data)=>{
        console.log(data);
        ReactDOM.render(<BrowserRouter><App props={data}/></BrowserRouter>,document.getElementById("root"));
    })
}else{
    console.log("Is in production!");
    getData().then((data)=>{
    ReactDOM.hydrate(<BrowserRouter><App props={data}/></BrowserRouter>,document.getElementById("root"));
    })
}
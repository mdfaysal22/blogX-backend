import mongoose from "mongoose";
import config from "../config";


const database = async() => {
    if(config.database_url){
        await mongoose.connect(config.database_url);

    }
    else{
        console.log("Database URL not founded !!")
    }
};

export default database
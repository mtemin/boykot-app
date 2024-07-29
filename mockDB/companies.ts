// @ts-ignore
import type {Company} from "~/types";


const companies:Company[] = [
    {
        id:0,
        name:"hamidiye",
        isBoycott:false,
        whyBoycott:["test"],
        category:"beverage"

    },
    {
        id:1,
        name:"kahve dünyası",
        isBoycott:true,
        whyBoycott:["Kahve Dünyası, Filistin'deki soykırım devam ederken yahudilerin hamursuz bayramı (Pesah) için özel bir kek yaparak bu bayramı kutladı","test"],
        category:"giyim-tekstil",
        alternatives:["mahmood","espressolab","kurukahveci mehmet efendi"]

    },
    {
        id:2,
        name:"ariel",
        isBoycott:true,
        whyBoycott:["test","bu bir test"],
        category:"cosmetic"

    },
    {
        id:3,
        name:"ülker",
        isBoycott:true,
        whyBoycott:["test","test2","test3"],
        category:"food"

    },
    {
        id:4,
        name:"coca cola",
        isBoycott:true,
        whyBoycott:["test"],
        category:"otomotiv"

    },

]

export default companies;

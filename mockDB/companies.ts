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
        whyBoycott:["Kahve Dünyası, safını belli edercesine tam da Filistin'deki soykırım devam ederken yahudilerin hamursuz bayramı (Pesah) için özel bir kek yaparak bu bayramı kutladı","test"],
        proofs:["https://www.google.com/","https://www.google.com/"],
        category:"içecek",
        alternatives:["mahmood","espressolab","kurukahveci mehmet efendi"]

    },
    {
        id:2,
        name:"ariel",
        isBoycott:true,
        whyBoycott:[
            "Ariel'in üst firması P&G(Procter&Gamble), ar-ge merkezini Tel Aviv'de kurdu.",
            "bu bir test"],
        category:"temizlik"

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
   {
        id:5,
        name:"adidas",
        isBoycott:true,
        whyBoycott:["Adidas iç çamaşırı ürünlerini israilli üretici Delta Galil'e ürettiriyor."],
        category:"giyim"
    },
    {
        id:6,
        name:"axe",
        isBoycott:true,
        whyBoycott:[""],
        category:"kozmetik"
    },


]

export default companies;

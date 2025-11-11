import express from "express"
import type {Request, Response} from "express";
import axios from "axios";

const app = express()
app.use(express.json())


let secondPart:string | null = null

app.post("/receive", (req:Request, res:Response)=>{
    secondPart = req.body.part2
    res.send("Code qabul qilindi")
})

async function main():Promise<void> {
    const myUrl = "https://unhoarded-annalise-unfollowing.ngrok-free.dev/receive"
    const msg = "Hello, bu Hojiakbar"

    try {
        console.log("Post so'rov yuborilmoqda..");
        const postRes = await axios.post("https://test.icorp.uz/interview.php", {
            msg,
            url:myUrl
        })

        
        const firstPart:string = (postRes.data && postRes.data.part1) || postRes.data
        console.log("1-qism:", firstPart);


        console.log("Ikkinchi qism..");
        await new Promise<void>((resolve, reject)=>{
            const start = Date.now()
            const interval = setInterval(()=>{
                if(secondPart){
                    clearInterval(interval)
                    resolve()
                }else if(Date.now()-start>15000){
                    clearInterval(interval)
                    reject(new Error("Ikkinchi qism 15 soniyada kelmadi!"))
                }
            }, 1000)
        })


        console.log("2-qism:", secondPart);

        const fullCode = firstPart+secondPart

        console.log("Toliq kod:", fullCode);

        if (!secondPart) {
            console.error("Ikkinchi qism kelmadi, GET yuborib bo‘lmaydi");
            return;
        }

        const getRes = await axios.get("https://test.icorp.uz/interview.php", {
            params:{code:fullCode}
        })
        
        
        console.log("Yakuniy xabar:", getRes.data.msg);
        
        
    } catch (error:any) {

        console.log("Error:", error.message);
        
    }
    
}

app.listen(3000, ()=>{
    console.log("Server localhost://3000 da ishga tushdi");
    main()
})
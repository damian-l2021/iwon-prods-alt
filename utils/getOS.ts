
export default function getOS(user:string, linkCel:string, linkPC:string){
    if(user.includes("Android") || user.includes("iPhone")){
        return linkCel;
    } else {
        return linkPC;
    }
}
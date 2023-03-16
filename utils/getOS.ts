
export default function getOS(os:string, linkCel:string, linkPC:string){
    if(os.toLowerCase() == "android" || os.toLowerCase() == "darwin"){
        return linkCel;
    } else {
        return linkPC;
    }
}
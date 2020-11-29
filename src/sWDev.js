
if('serviceWorker' in navigator ){
    console.log('check if serviceWorker is supported on browser ',process.env.PUBLIC_URL)
}
export default function swDev(){
    let swUrl=`${process.env.PUBLIC_URL}/serviceWorker.js`
    navigator.serviceWorker.register(swUrl).then((response)=>{
console.log('resposne',response)
    }).catch((error)=>console.log(error,'some error occured..SW not injected'))
}

//service worker have life cycle methods
//Register ==>Install(trigger install event) ==> Activate(trigger activate event)
//Message events & functional events such AS 'fetch' ,'push', & 'sync'

const initState={role:"",nickname:""};
export function loginReducer(prevState=initState,action){
    const {type,payload}=action;
    if(type=="add"){
        return payload
    }
    return prevState
}   

const menu=[];
export function menuReducer(prevState=menu,action){
    const {type,payload}=action;
    if(type=="generate"){
        return payload;
    }
    return prevState
}
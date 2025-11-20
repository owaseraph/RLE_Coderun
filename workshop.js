 
export function encodeRLE(text){
    if(!text) return "";


    let encoded = "";
    let count=1;

    for(let i=1;i<text.length;i++){
        if(text[i]==text[i-1]){
            count++;
        }
        else{
            encoded+=count+text[i-1];
            count=1;
        }
    }

    encoded+=count+text[text.length-1];
    return encoded;
}

export function decodeRLE(text){
    let decoded="";
    let count="";
    for(let char of text){
        if(!isNaN(char)){
            count+=char;
        }
        else{
            decoded+=char.repeat(Number(count));
            count="";
        }
    }
    return decoded;
}
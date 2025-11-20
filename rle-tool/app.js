function encodeRLE(text){
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

function decodeRLE(text){
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


document.getElementById("encodeBtn").addEventListener("click", () => {
  const input = document.getElementById("inputText").value;
  const encoded=encodeRLE(input);
  document.getElementById("outputText").value = encoded;

  const original_size=input.length;
  const encoded_size=encoded.length;

  let saved=0;
  if(original_size>0){
    saved=Math.round((1-encoded_size/original_size)*100);
  }

  const info=`Original : ${original_size} chars | Encoded: ${encoded_size} | Saved: ${saved}%)`;

  document.getElementById("CompressionInfo").textContent=info;
});

document.getElementById("decodeBtn").addEventListener("click", () => {
  const input = document.getElementById("inputText").value;
  document.getElementById("outputText").value = decodeRLE(input);
});


import { getFriendlyComponentName } from "@tezjs/payload";

export function snakeToCamel(value) {
    return getFriendlyComponentName(value.split("-").map((t,i)=>  
    {
      var textCode = '';
      for(var i=0;i<t.length;i++){
        let character = t.charAt(i);
        let isNotNumber =textCode === "" ? isNaN(character) :true
        if(isNotNumber)  {
          textCode += character
        }
      }
      return String(textCode)
    }).join(''))
  }
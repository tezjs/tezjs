export function snakeToCamel(value) {
    if (!(/[_-]/).test(value)) return value
  
    return value.split("-").map((t,i)=>  
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
    }).join('')
  }
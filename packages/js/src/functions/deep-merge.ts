const OBJECT:string = "object";
export function deepMerge(target, source) {
    if(typeof target !== OBJECT || typeof source !== OBJECT) return false;
    for(var prop in source) {
    if(!source.hasOwnProperty(prop)) continue;
      if(prop in target) {
        if(typeof target[prop] !== OBJECT) {
          target[prop] = source[prop];
        } else {
          if(typeof source[prop] !== OBJECT) {
            target[prop] = source[prop];
          } else {
            if(target[prop].concat && source[prop].concat) {
              target[prop] = target[prop].concat(source[prop]);
            } else {
              target[prop] = deepMerge(target[prop], source[prop]); 
            } 
          }  
        }
      } else {
        target[prop] = source[prop]; 
      }
    }
  return target;
}
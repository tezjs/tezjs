import { BLANK } from "../const/core.const"
export function snakeToCamel(value) {
    if (!(/[_-]/).test(value)) return value
  
    return value.replace(/[0-9]/g,BLANK).toLowerCase()
      .replace(/([-_])([a-z])/g, (_match, _p1, p2) => p2.toUpperCase())
  }
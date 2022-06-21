export function snakeToCamel(value) {
    if (!(/[_-]/).test(value)) return value
  
    return value.toLowerCase()
      .replace(/([-_])([a-z])/g, (_match, _p1, p2) => p2.toUpperCase())
  }
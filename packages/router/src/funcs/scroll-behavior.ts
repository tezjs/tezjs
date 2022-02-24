export function scrollBehavior(to:any) {
    if (to.hash) {
      let position:any = {selector: to.hash}
      return position
    }else
    return { top: 0,behavior: 'smooth' }
  }
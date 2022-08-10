export function convertDateToTicks(date) {
    const epochOffset = 621355968000000000;
    const ticksPerMillisecond = 10000;
  
    const ticks = date.getTime() * ticksPerMillisecond + epochOffset;
  
    return ticks;
  }
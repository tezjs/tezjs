declare const Image:any;
Object.defineProperty(Image.prototype, "src", {
    set(newValue) {
      //if (newValue.indexOf("https://d2ms8rpfqc4h24.cloudfront.net/") !== -1)
        // defaultContainer.loadImage(newValue).then((t) => {
        //   this.setAttribute("src", t);
        // });
    //   else this.setAttribute("src", newValue);
    },
    enumerable: true,
    configurable: true,
  });
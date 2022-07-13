onmessage = async function(event) {    
    fetch(event.data.url)
    .then(response => {
  return response.blob();
    })
    .then(blob => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        postMessage({ index:event.data.index,url:event.data.url,baseString:reader.result  }); 
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    }))
}

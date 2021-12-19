const desaText = document.getElementsByClassName('namaDesa');

fetch('https://web-desa-config.herokuapp.com/desa')
  .then(response => {
    // The response is a Response instance.
    // You parse the data into a useable format using `.json()`
    return response.json();
  })
  .then(data => {
    console.log(data)
    for (const el of desaText) {
      el.innerHTML = data.name
    }
  })
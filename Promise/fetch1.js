let url1 = "https://jsonplaceholder.typicode.com/albums"
fetch(url1).then(response => response.json())
          .then(data => console.log(data))
          .catch(error => {
            console.log(error);
            
          })
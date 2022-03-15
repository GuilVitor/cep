



     const cep = document.querySelector("#cep");
     
     const options = {
       method: "GET",
       mode: "cors",
       cache: "default",
     };
     
     const showData = (result) => {
       for (const campo in result) {
         if (document.querySelector("#" + campo)) {
           document.querySelector("#" + campo).value = result[campo];
         }
       }
     };
     cep.addEventListener("blur", (e) => {
       let search = cep.value.replace("-", "");
       console.log(search);

       const url = `https://viacep.com.br/ws/${search}/json/`

     
     fetch(url, options)
         .then((response) => {
           response.json().then((data) => {
             console.log(data);
             showData(data);
           });
         })
         .catch((e) => {
           console.log("ERRO: " + e);
         });
     });


     
//Considerando o objeto abaixo:
//const person = {
//    firstName: "John",
//    lastName: "Doe"
//  };
//  
//  4. Imprima todas as informações do objeto

const person = {
  firstName: "John",
  lastName: "Doe"
};

let data = "";

for (let info in person){
    data += `
        ${info}: ${person[info]}
    `;
};

console.log(data);
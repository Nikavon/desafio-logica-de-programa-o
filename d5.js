//5. Adicione a seguinte propriedade e valor ao objeto
//country: Norway

const person = {
    firstName: "John",
    lastName: "Doe"
  };

  person.country = "Norway";

  let data = "";

  for (let info in person){
    data += `
        ${info}: ${person[info]}
    `;
};

console.log(data);
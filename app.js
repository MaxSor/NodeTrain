var url = process.argv[2];
console.log(url);

let urli = {name : url};

console.log(urli);

console.log(`URL is ${url} `);
console.log(`URL is ${urli.name}.`);



let person = {name: 'John Smith'};   

let tpl = `My name is ${person.name}.`;    

let MyVar="My name is "+ person.name+".";


console.log(`My name is ${person.name}.`);

console.log(`This Works ${urli.name}.`);
console.log('URL is ${urli.name}.');
console.log('URL is ${urli.name} ');

console.log("template literal= "+tpl);  

console.log("my variable = "+MyVar);

//MODULO ES6

//parametros default//////////////////////////////////////////////
//--es5 

function newFunction1(name, age, country){
	var name = name || 'jose';
	var age = age || '21';
	var country = country || 'VE';co
	console.log(name, age, country);
}

//--es6

function newFunction2(name = 'jose', age = '21', country='VE'){
	console.log(name,age,country);
}
//--ejemplo de es6


newFunction2('oscar', '32', 'mx')
newFunction2();








// template literals///////////////////////////////////////////////

//--old 

let hello = 'hello';
let world = 'world';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// -- new form to do this

//-- parece no funcionar en esta version de vs:code 1.35
let mundo = 'mundo';
let hola = 'hola';
let epicPhrase2 = `${hola} ${mundo}`;
console.log(epicPhrase2);








// codigo de salida multilinea o  //////////////////////////////////////////////

//--antes

let texto1 = 'esta es la primera oracion a mostrar \n'
+ 'esta es la seguda linea de texto1'

//--es6

let texto2 = `esta es la primera linea de texto2
y esta la segunda`;

console.log(texto1);
console.log(texto2);




//estructuracion de elementos////////////////////////////////////

let person = {
	'name': 'jose',
	'age': 21,
	'country': 'VE'}

//--OLD
console.log(person.name,person.age);

//--es6
let {name} = person;
let {country} = person;
console.log(name, country);


// operador de propagacion////////////////////////////////////////////


let team1 = ['ines', 'oscar', 'julian']
let team2 = ['nana', 'yesica','camila']

let educacion = ['samuel', ...team1, ...team2]

console.log(educacion);

// comportamiento de const, let y var////////////////////////

/*var  =  {
	'global-scope' = 'si',
	'function-scope' = 'si',
	'block-scope' = 'no',
	'can-be-reassingned' = 'yes'}

let  =  {
	'global-scope' = 'no',
	'function-scope' = 'si',
	'block-scope' = 'si',
	'can-be-reassingned' = 'yes'}

const  = {
	'global-scope' = 'no',
	'function-scope' = 'si',
	'block-scope' = 'si',
	'can-be-reassingned' = 'no'}
	
*/

//propiedad de objetos mejorada/////////////////////////////////

let name = 'jeson';
let state = 'amazonas';

//--es5
Obj = {name: name, state: state};
//--es6
obj2 = { name, state };
console.log(obj2);

//funciones flecha///////////////////////////////////////


const names = [
	{name: 'oscar', age: 45},
	{name: 'katerine', age: 34}
]

//-ES5
/*let listofnames1 = names.map(function(item){
	console.log(item.name});
})
*/

//--Es6

let listofnamex2 = names.map(item => console.log(item.age));


const listofnames3 = (name, age) => {
	//aqui su codigo 
};

const listofnames4 = name => {
	//code
};

let num = 2;
let square = num => num*num;
console.log(square);

//--matrices en Es8///////////////////////////////////////

const data = {
    frontend: 'oscar',
    backend: 'isabel',
    design: 'ana'
}




//promesas/////////////////////////////////////////////////////

//profundisar mucho en el tema













//clases//////////////////////////////////////////////////////

//profundisar medio en el tema











//generators////////////////////////////////////////////////////

function* helloworld(){
	if (true){

	}
}













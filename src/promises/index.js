let x = 14;

// de esta forma se define una promesa
const promi = new Promise((resolve, reject)=>{
    if (x == 10){
        resolve('es diez');
    }else {
        reject('no es diez');
    }
});
// de esta forma se llama la funcion promesa
promi.then(resolve =>{
    console.log('bien '+resolve);
})
.catch(error =>{
    console.log('alto '+error);
});







// la promesa nos permite esperar a que se ejecute una operancion sin que afecte el asincronismo
// por ejemplo -->


let x = 10;

console.log('1. el proceso esta iniciando');

setTimeout(() =>{
    x = x+5;
    console.log('2. el valor de x se cambio');
},2000);

console.log('3. el valor de x es '+x);
// al ejecutarse esta funcion, el asincronismo hace de las suyas alterando el orden.
//este es el dyspaly del terminal

/*
1. el proceso esta iniciando
3. el valor de x es 10
2. el valor de x se cambio

*/

// pero ahora usare una promesa y esperaran a que terminen los precesos en orden.
// -->

let y = 10;

const promis = new Promise((resolve,reject) =>{
    setTimeout(() =>{
        y = y+5;
        console.log('2. el valor de y a cambiado a string');
        resolve(y);
    }, 2000);
});

console.log('1. el proceso esta iniciando');

promis.then(res => {
    console.log('3. el valor de x es '+res);
});
// este es el resultado ahora
/*
1. el proceso esta iniciando
2. el valor de y a cambiado a string
3. el valor de x es 15
*/


// aqui hare un preceso que muestra aṕellido y luego nombre

let name = 'jose';
let second = 'padrino';
let age = 21;
console.log(`el usuario tiene ${age}`);
console.log(`espera 3 segundos`);
const pronm = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        console.log(`1`);
    }, 1000);
    setTimeout(() =>{
        console.log(`2`);
    }, 2000);
    setTimeout(() =>{
        console.log(`3`);
        name= 'enrique';
        resolve(name);
    }, 3000);
});
pronm.then((res) =>{
    console.log(`es usuario se llama ${second} ${res}`);
});
/*
el usuario tiene 21
espera 3 segundos
1
2
3
es usuario se llama padrino enrique
*/

let names = [
    {id: 1, name: 'jose'},
    {id: 2,name: 'astrid'}];
let phones = [
    {id: 1, phone: 57123654}, 
    {id: 2, phone: 58638388}];
const obtainName = id =>{
    return new Promise((resolve, reject) =>{
        if (names.find(name => name.id == id)) {
            resolve(`el usuario existe`);
        }else{ 
            reject(`el usuario no existe`);
        }
    });
};
const obtainPhone = id =>{
    return new Promise((resolve,reject) =>{
        if (phones.find(phone => phone.id == id)) {
            resolve(`el numero existe`);
        }else{
            reject(`el numero no existe`);
        }
    }); 
};
// entre then(...) y .catch(...) no dene haber ; 
obtainName(5)
.then(res =>{
    console.log(res);
}) // aqui es donde no debe ir ';'
.catch(error =>{
    console.error(error);
});



// la siguiente es la misma solo que se hace un promise dentro de otro promise


let names = [
    {id: 1, name: 'jose'},
    {id: 2,name: 'astrid'}];
let phones = [
    {id: 1, phone: 57123654}, 
    {id: 2, phone: 58638388}];
const obtainName = id =>{
    return new Promise((resolve, reject) =>{
        if (names.find(name => name.id == id)) {
            console.log(`el usuario existe`);
            resolve(obtainPhone(id));
        }else{ 
            reject(`el usuario no existe`);
        }
    });
};
const obtainPhone = id =>{
    return new Promise((resolve,reject) =>{
        if (phones.find(phone => phone.id == id)) {
            resolve(`el numero existe`);
        }else{
            reject(`el numero no existe`);
        }
    }); 
};
// entre then(...) y .catch(...) no dene haber ; 
obtainName(5)
.then(mesage =>{
    console.log(mesage)
})
.then(res =>{
    console.log(res);
}) // aqui es donde no debe ir ';'
.catch(error =>{
    console.error(error);
});

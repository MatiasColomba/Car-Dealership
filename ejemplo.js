var arr1 = ['first', 'second', 'third']

var arr2 = [
  {
    id: 1,
    title: 'hello'
  },
  {
    id: 2,
    title: 'world'
  },
  {
    id: 3,
    title: ' 🌎'
  }
]

arr2.forEach((x,i)=>{x.title=arr1[i]})

console.log(arr2)

//x : is element // i : is index

let autos = [
    {
        marca:"Ford Fiesta",
        modelo: 2019,
        precio: 150000,
        km: 200,
        color: "Azul",
        cuotas:12,
        anio: 2019,
        patente: "APL123",
        vendido: false,
    },
    {
        marca:"Toyota Corolla",
        modelo: 2019,
        precio: 100000,
        km: 0,
        color: "Blanco",
        cuotas:14,
        anio: 2019,
        patente:"JJK116",
        vendido: false,
    }
]


autos.forEach((autos,i)=>{autos.vendido=true})
console.log(autos)

//-----------------------------------------

var array = [{ 
    "name": "mike",
    "age": null
  },
  { "name": "jim",
    "age": 99
  }];
  
  array = array.map(function(item) {
    if(item.age === null) {
      // delete item.age;
      item.age = undefined;
    }
    
    return item;
  });
  
  console.log(array);
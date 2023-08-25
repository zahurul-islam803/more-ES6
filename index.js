const numbers = [5,3,4,8,6,1,2,7];

// const double = n => n * 2;
// const result = numbers.map(double);
// console.log(result);

const result2 = numbers.map(n => n * 2);
// console.log(result2);
const AddedBonus = numbers.map(num => num + 5);
// console.log(AddedBonus);
const square = numbers.map(num => Math.pow(num, 2));
// console.log(square);
const half = numbers.map(n => n / 2);
// console.log(half);


const friends = ['tom', 'bom', 'som ', 'pagla ', 'pagliya', 'efr '];

// const lengths = friends.map(f => f.length);

// const num = numbers.forEach(n => console.log(n+5));

// const filters = numbers.filter(n => n>5);
// console.log(filters);
// let arr = [];
// const filter = friends.filter(n =>{
//  const length = n.length;
//  if(length % 2 === 0){
//   arr.push(length);
// }
// })
// console.log(arr);
// let arr = [];
// const filter = friends.map(n =>{
//  const length = n.length;
//  if(length % 2 === 0){
//   arr.push(length);
// }
// })
// console.log(arr);

// const filter = friends.filter(n => n.length % 2 === 0);
// console.log(filter);

// const find = numbers.find(n => n > 5);
// console.log(find);

// const reduce = numbers.reduce((p,c)=>p+c,1);
// console.log(reduce);


// Array of objects 
// const products = [
//   {id: 1, name: 'lenovo', price: 65000},
//   {id: 2, name: 'hp', price: 60000},
//   {id: 3, name: 'dell', price: 40000},
//   {id: 4, name: 'mac', price: 170000},
// ]

// map
// const result = products.map(p => p.name);
// console.log(result);

// reduce
// const reduce = products.reduce((p, c) => p + c.price, 0);
// console.log(reduce);


// class

// class Product{
//   country = "Bangladesh";
//   constructor(name){
//     this.name = name;
//   }
//   speak(talk){
//     console.log(`Talking about: ${talk}`);
//   }
// }

// const lenovo =  new Product('lenovo laptop for user')
// console.log(lenovo);

// lenovo.speak('How are you?');

// class Teacher{
//   constructor(name, subject){
//     this.name = name;
//     this.subject = subject;
//   }
//   lecture(){
//     console.log('Sir is teaching');
//   }
// }

// const tapan = new Teacher('tapan', 'accounting');
// console.log(tapan);
// tapan.lecture('hi');


// class Vehicles{
//   constructor(name, price){
//     this.name = name;
//     this.price = price;
//   }
//   move(){
//     console.log('gari cole na, cole na re gari colena');
//   }
// }

// class Bus extends Vehicles{
//   constructor(name, price, seat, ticketPrice){
//     super(name, price);
//     this.seat = seat;
//     this.ticketPrice = ticketPrice;
//   }
// }

// class Truck extends Vehicles{
//   constructor(name, price, load){
//     super(name, price);
//     this.load = load;
//   }
// }



// practice task

// task no 1;
// method 1
// const newArray = [];
// const oddArray = [1,3,5,7,9];
// for (const item of oddArray) {
//   newArray.push(item + 1);
// }
// console.log(newArray);

// method 2
// const oddArray = [1, 3, 5, 7, 9];
// const newArray = oddArray.map(arr => arr + 1);
// console.log(newArray);

// task no 2;
// method 1
// const arrOfNumber = [33,50,79,78,90,101,30];
// const newArray = arrOfNumber.filter(arr => arr % 10 === 0);
// console.log(newArray); 

// method 2
// const arrOfNumber = [33, 50, 79, 78, 90, 101, 30];
// const newArray = arrOfNumber.find(arr => arr % 10 === 0);
// console.log(newArray);

// task no 3
// const instructor = [
//   {name: 'Nodi', age: 28, position: 'Senior'},
//   {name: 'Akil', age: 26, position: 'Junior'},
//   {name: 'Shobuj', age: 30, position: 'Senior'},
// ]

// const find = instructor.filter(p => {
//   if(p.position === 'Senior'){
//     console.log(p.name);
//   }
// });

// task no 4;
// const age = [
//   {name: 'Mina', age: 20},
//   {name: 'Rina', age: 15},
//   {name: 'Sucorita', age: 22},
// ]
// const sumOfAge = age.reduce((p, c)=> p + c.age, 0);
// console.log(sumOfAge);
// let total = 0;
// for (const item of age) {
//   const value = item.age;
//   total += value;
// }
// console.log(total);



// task -1: console log the secondary school location of Sophia 
// let data = {
//     Sophia: {
//         id: 33,
//         study: [
//             {
//                 primary:
//                     [
//                         { school_name: "ABC primary school" },
//                         { location: "Peters burg" }
//                     ]
//             },
//             {
//                 secondary:
//                     [
//                         { school_name: "ABC secondary school" },
//                         { location: "St Lorence" }
//                     ]
//             },
//         ]
//     }
// }

// const getData = data.Sophia.study;
// const location = getData[1].secondary[1];
// console.log(location['location']);



// task-2: console .log  output: Petersburg, Herry

// let students = {
//     2222: {
//         name: "Jack",
//         section: "C",
//         class: "IX",
//         address: {
//             "building no": 12,
//             "street": "St. Jonson",
//             "city": "Petersburg",
//             "country": "UK"
//         }
//     },
//     3333: {
//         name: "Herry",
//         section: "D",
//         class: "X",
//         address: {
//             "building no": 85,
//             "street": "DC road",
//             "city": "Kachukhet",
//             "country": "Bangladesh"
//         }
//     }
// }

// const getData = students['2222']['address']['city'];

// const getName = students['3333']['name'];

// console.log(`${getData}, ${getName}`);




//  task-3 : access and then show habluder adda
// show output Beginner
// let data2 = {
//     data:
//         [
//             {
//                 bookId: 1,
//                 bookDetails: {
//                     name: "habluder adda",
//                     category: "XYZ",
//                     price: "20$",
//                 },
//                 bookCategory: "Basic",
//             },
//             {
//                 bookId: 2,
//                 bookDetails: {
//                     name: "gobluder adda",
//                     category: "ABC",
//                     price: "40$",
//                 },
//                 bookCategory: "Beginner",
//             }
//         ]
// }

// const getHablu = data2['data'][0]['bookDetails']['name'];
// const getBeginner = data2["data"][1]["bookCategory"];
// console.log(`${getHablu}
// ${getBeginner}
// `);



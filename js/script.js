// "console"-ում տպել 1-100 միջակայքի թվերից միայն այն թվերը, որոնք բաԺանվում են 3-ի և 5-վրա 

/*for (let i = 0; i < 100; i++) {
    if(i % 3 == 0 && i  % 5 == 0){
        console.log(i);
    }
}*/



// Տպել  20-30 թվերի միջև ընկած բոլոր բնական թվերի գումարը

/*let sum =0
for (let i = 20; i < 30; i++) {
    sum += i;
    
}
console.log(sum);*/

// Ստեղծել 3 թվային փոփոխականներ և  տպել նրանցից ամենամեծը

/*
let a = 10;
let b = 20;
let c = 30;
let largest;

if (a > b) {
    if (a > c) {
        largest = a;
    } else {
        largest = c;
    }
} else {
    if (b > c) {
        largest = b;
    } else {
        largest = c;
    }
}

console.log(largest); */

// Տպել 1-100 միջակայքից միայն 3 և 7 բաժանվող թվերը և վերջում դրանց գումարը

/*let sum=0;
for (let i = 0; i < 100; i++) {
    if(i % 3 == 0 && i  % 7 == 0){
       
        console.log(i);
        sum+=i
    }
}
console.log(sum);*/

// Տպել 1-20 միջակայքից բոլոր թվերը բացի 6 և 16-ից

// for(let i =1; i<20; i++){
//     if(!(i == 6 || i == 16)){
//         console.log(i);
//     }
    
// }

// Տպել 1-20 բոլոր թվերը հակառակ հաջորդականությամբ
for (let i = 20; i >0; i--) {
console.log(i);    
}
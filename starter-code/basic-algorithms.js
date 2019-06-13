/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */

const hacker1 = "Adriana";
const espaco = " ";
let hacker2 = "";
let hacker1new = "";
let hacker2new = "";

console.log(`The driver's name is ${hacker1}`);

hacker2 = prompt("Whats your name? ");

console.log(`The navegator's name is ${hacker2}`);

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}else if (hacker1.length < hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker2.length} characters`);
}else{
    console.log(`Wow, you both got equally long names, ${hacker2.length} characters`);
}


for( let i=0; i< hacker1.length ; i+=1){
    hacker1new += hacker1[i].concat(espaco);

}

console.log(`The name with upper letters is ${hacker1new.toUpperCase()} `);



for (let i=hacker2.length -1; i>=0; i-=1){
    hacker2new += hacker2[i];
}

console.log(`The name with upper letters is ${hacker2new} `);

if (hacker1.localeCompare(hacker2) === -1){
    console.log(`The hacker1 name goes first`);
} else if( acker1.localeCompare(hacker2) === 1){
    console.log(`The hacker2 name goes first`);
} else {
    console.log(`What?! You both got the same name?`);
}

let string2 = prompt("Digit a new string");
string2 = string2.toLowerCase();

let string2new = "";


for (let i=string2.length -1; i>=0; i-=1){
    string2new += string2[i];
}

if(string2new === string2){
    console.log("It´s a Palindrome")
}else{
    console.log("It´s not a Palindrome")
}


const paragraphs = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet sollicitudin dolor, at vulputate nisl. In a hendrerit felis, ut ornare mi. Aliquam aliquam erat non nunc ultricies pulvinar. Vivamus ac lacus eu neque pharetra tincidunt vel vel augue. Sed bibendum purus vitae semper faucibus. Integer euismod massa sit amet sem mollis volutpat. Proin venenatis erat non nisl ornare, eget dapibus massa volutpat. Cras metus odio, posuere nec nulla ac, vestibulum consectetur tellus. Praesent feugiat mattis velit ut vulputate. Nunc in arcu ut diam consequat condimentum. Donec at elementum nibh. Nulla sit amet ultrices quam. Vivamus diam augue, suscipit eu metus at, fringilla aliquam lorem. Vivamus consequat ornare porttitor. Mauris placerat eros fermentum gravida consectetur. Vestibulum vitae neque sit amet libero iaculis venenatis. Sed porta accumsan convallis. Vestibulum vel purus tempus, semper ligula feugiat, iaculis diam. Fusce nec quam in dui tincidunt volutpat nec ut quam. Mauris vehicula facilisis malesuada. Duis finibus neque id lorem rutrum, eget hendrerit purus vestibulum. Quisque molestie non lorem vel volutpat. Suspendisse eu convallis diam. Mauris suscipit eget lacus at vulputate. Curabitur non risus nec neque condimentum placerat in vitae justo. Suspendisse fermentum, purus sit amet vehicula interdum, lectus eros ultricies augue, et consectetur tortor risus a ante. Suspendisse vitae elit in arcu maximus sagittis ut non metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam eget quam eget massa luctus pharetra mattis ut sem. Aliquam in neque lorem. Morbi sit amet porta dolor. Maecenas convallis magna enim, sed elementum purus pulvinar non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut molestie accumsan sapien, eget vulputate odio varius a. In maximus lectus sit amet justo tristique, a molestie nisi malesuada. In aliquam dapibus nisi non bibendum. Duis ullamcorper metus eu arcu semper laoreet. Morbi dictum, orci non cursus scelerisque, tellus massa commodo diam, eget elementum magna eros ac sapien. In commodo imperdiet dignissim. Sed tempus, orci pretium pharetra auctor, turpis neque imperdiet erat, aliquam pharetra elit diam et metus."
const words = paragraphs.split(" ");

console.log(words.length)


const words2 = paragraphs.split("et");
console.log(words2)
console.log(words2.length)

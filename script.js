let numberOne= 5;
// creating a variable in js when ever you create a variable in javascript you should use a keyword let before variable name and the variable name should follow camel case
let numberTwo=7;

numberOne+=numberTwo;
numberTwo-=numberOne;
demo1=numberOne*numberTwo;
demo2=numberOne/numberTwo;
demo3=numberOne%numberTwo;
console.log(numberOne);
console.log(numberTwo);
console.log(demo1);
console.log(demo2);
console.log(demo3);
// the above one are arithemetic op + , - , * , / , % , **
numberOne+=5;
numberTwo-=2;
demo1*=2;
demo2/=3;
demo3**=2;
demo4=demo1+demo2;
console.log(numberOne);
console.log(numberTwo);
console.log(demo1);
console.log(demo2);
console.log(demo3);
console.log(demo4);
// the above oe are the  assignments op  = , += , -= , *=, /= %= **=
console.log(numberOne==numberTwo);
console.log(numberOne!=demo1);
console.log(numberOne>demo2);
console.log(numberTwo<numberOne);
console.log(demo1>=demo2);
let myNumberIs="4";
console.log(myNumberIs===demo3);
/*notice here the variable myNumberIs=4 and the updated value of demo 3 is 4
but when you use ===it wil give false because it checks the data type too
cause here myNumberIs string data type and demo3 is integer.*/

console.log(demo3<=6);
//the above all are the comparsion op  == === != > < >= <= 
let myNameIs="YuvrajPotulgude";
console.log(myNameIs.length);
console.log(myNameIs.slice(2,4));
console.log(myNameIs.substring(2,7));
console.log(myNameIs.replace("Potulgude","singh"));
console.log(myNameIs.replaceAll("Yuvraj Potulgude","swaraj"));
console.log(myNameIs.toLowerCase("Yuvraj Potulgude"));
console.log(myNameIs.concat("@gmail.com"));
let world= "     helloworld";
console.log(world.trim());
alert("hey im yuvraj nice to meet you");

/*
the above code is string methods
String length
String slice()
String substring()
String substr()
String replace()
String replaceAll()
String toUpperCase()
String toLowerCase()
String concat()	String trim()*/








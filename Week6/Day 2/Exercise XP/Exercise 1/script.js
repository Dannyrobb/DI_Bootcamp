// #1 answer: 3
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
}

// run in the console:
q1()


//#2 
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a);
}

// run in the console:
q22() //0
q2() //5
q22()//5

//#3
function q3() {
    window.a = "hello";
} 


function q32() {
    alert(a);
}

// run in the console:
q3() // hello
q32() // undefined

//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}


// run in the console:
q4() //test

//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a);//5
}
alert(a);//5

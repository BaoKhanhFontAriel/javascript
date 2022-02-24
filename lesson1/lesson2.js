// 1
function loopTest1(){
    console.log("bai 1");

    for (let i = 1; i <= 10; i++) {
        if (i % 2 == 0){
            console.log( i + " la so chan");
        }
        else {
            console.log( i + " la so le");
        }
    }
}

// 2
function loopTest2() {
    console.log("bai 2");

    for (let i = 1; i <= 10; i++) {
        if (i % 3 == 0){
            if (i % 5 == 0){
                console.log("fizzbuzz");
            }
            console.log("fizz");
        }
        else if (i % 5 == 0){
            console.log("buzz");
        }
    }
}


loopTest1();
loopTest2();
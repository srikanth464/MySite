const monkeyTrouble = (aSmile,bSmile) => {
    if((aSmile && bSmile) || (!aSmile && !bSmile)){
        console.log("true");
    }else{
        console.log("false");
    }
}

monkeyTrouble(true, true);
monkeyTrouble(false, false);
monkeyTrouble(true, false);
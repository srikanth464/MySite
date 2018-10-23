const sleepIn = (weekday,vacation) => {
    if(!weekday || vacation){
        console.log("true");
    } else {
        console.log("false");
    }
}

sleepIn(false, false);
sleepIn(true, false);
sleepIn(false, true);
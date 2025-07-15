const square_size = parseInt(process.argv[2]);

if (Number.isNaN(square_size)) {
    console.log("Missing number of occurrences");
} else {
    for (let i = 0; i < square_size; i++) {
        let x = "";
        for (let j = 0; j < square_size; j++) {
            x += "X";
        }
        console.log(x);
    }
}   
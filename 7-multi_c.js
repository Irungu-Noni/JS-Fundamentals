const xy = parseInt(process.argv[2]);

if (Number.isNaN(xy)) {
    console.log("Missing number of occurrences");
} else {
    for (let i = 0; i < xy; i++) {
        console.log("C is fun");
}
}

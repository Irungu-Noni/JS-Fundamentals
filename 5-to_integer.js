const num_arg = process.argv[2];
const numb = parseInt(num_arg);

if (Number.isNaN(numb)) {
    console.log("Not a number");
} else {
    console.log(`My number: ${numb}`)
}

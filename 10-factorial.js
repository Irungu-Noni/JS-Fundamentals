function factorial(num_ber) {
    if (isNaN(num_ber) || num_ber <= 1) {
        return 1;
    }
    return num_ber * factorial(num_ber - 1);
}

const input_string = parseInt(process.argv[2]);

console.log(factorial(input_string));
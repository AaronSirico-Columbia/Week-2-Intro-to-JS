function doMath() {
    var value1 = document.getElementById('product').value;
    var value2 = document.getElementById('productTwo').value;
    var product1 = parseInt(value1);
    var product2 = parseInt(value2);
    var sum = product1 + product2;
    var square1 = Math.sqrt(product1);
    var square2 =  Math.sqrt(product2);
    document.getElementById("Anwsers").innerText = sum;
    document.getElementById("Anwsers1").innerText = square1;
    document.getElementById("Anwsers2").innerText = square2;
}

//Credits:
// Used to find square root funtion:  https://www.tutorialspoint.com/How-to-get-the-square-root-of-a-number-in-JavaScript#:~:text=In%20JavaScript%2C%20The%20Math.,denotes%20%E2%80%9CNot%20a%20Number%E2%80%9D.
// Used to link input field to button: https://stackoverflow.com/questions/68877776/how-to-link-a-button-and-input-field
// Used to convert string to integer: https://stackoverflow.com/questions/1133770/how-to-convert-a-string-to-an-integer-in-javascript

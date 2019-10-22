
function reverseString(str) {
    let revstr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        revstr = revstr + str[i];
    }
    return revstr;
}


document.getElementById('reverse').addEventListener('click', () => {
    const string = document.getElementById('string').value;
    console.log(string)
    document.getElementById('result').innerHTML = reverseString(string);
})

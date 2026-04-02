function getCount(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        let c = str[i];

        if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u') {
            count++;
        }
    }

    return count;
}
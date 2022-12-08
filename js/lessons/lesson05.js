let arr = ['20', '1', '77', '4', '41', '2', '24']


arr.forEach((item) => {
    if (item.startsWith('2') || item.startsWith('4')) {
        console.log(item);
    }
});




let n = 100;

for (let i = 2; i <= n; i++) {
    let flag = 1;
    if (i > 2 && i % 2 != 0) {
        for (let j = 3; j * j <= i; j = j + 2) {
            if (i % j == 0) {
                flag = 0;
                break;
            }
        }
    }
    else if (i != 2) flag = 0;
    if (flag == 1) {
        console.log(`Делители числа ${i}: 1 и ${i}`)
    }
}

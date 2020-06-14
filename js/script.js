let arr = ['22', '37', '455', '104', '47', '78', '377']; 

arr.forEach((item) => {
  if (item.startsWith('2') || item.startsWith('4')) {
    console.log(item);
  }
});



function myFunction(n) {
    divider:
        for (let i = 2; i <= 100; i++) {
            for (let j = 2; j <= Math.sqrt(i); j++) {
                if (i % j == 0) continue divider;     
            }
            console.log(i + ' Делители этого числа:  1 и ' + i);
        }
}
myFunction();


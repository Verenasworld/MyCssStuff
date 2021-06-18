const logo = document.querySelectorAll('#logo path');
for(let i =0; i<logo.length; i++){
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`)
}
//loop to all element and get the path length from individually letter

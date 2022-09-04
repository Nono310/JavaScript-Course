function calculateBill(bill){
    
    if (bill => 50 && bill <= 300 ){
        return (bill * 0.15);
        // console.log(gain);
    }else {
        return (bill * 0.20);
        // console.log(gain);
    }

}
const bills = [125, 555, 44];

for (let i = 0; i <= bills.length ; i++){
    console.log(`Bills ${bills[i]} `)
 //bills[i] represent each vallue of bill
//  console.log('This is gains   ', calculateBill(bills[i]))
 const gains = [calculateBill(bills[i])];
 console.log(`This is gains ${gains}`);
 for(let j = 0; j<= gains.length; j++) {
     const totals = [bills[i] + gains[j]];
     console.log(`Bills ${bills} Gains ${gains} Totals array ${totals}`)
     
 }
 
}

// const gainCal = (bill) => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
// const bills = [125, 555, 44];
//    for (let i = 0; i <= bills.length ; i++){
//     //bills[i] represent each vallue of bill
//     const gains = [gainCal(bills[i])];
//     for(let j = 0; j <gains.length; j++) {
//         const totals = [bills[i] + gains[j]];
//         console.log(`Bills is ${bills} Gains is ${gains} Totals is ${totals}`)
//     }
    
//    }
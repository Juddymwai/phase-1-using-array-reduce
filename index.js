const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here



// function addBatches(batteryBatches){
//     let totalBatteries=0
//     for (batch of batteryBatches){
//         totalBatteries+= batch
        
//     }
//     return totalBatteries

// }
// console.log(addBatches(batteryBatches))

const totalBatteries= [4, 5, 3, 4, 4, 6, 5].reduce(addBatches)

function addBatches(total, batches){
    let totalBatteries=0
    totalBatteries = batches + total
    return totalBatteries;
}

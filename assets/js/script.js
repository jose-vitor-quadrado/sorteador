function raffle() {
    
    let maxNumber = document.getElementById("raffle_number").value;

    let number = Math.floor(Math.random() * maxNumber+1);

    document.getElementById("raffled-number").innerHTML = number;

}
let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for(let stat in statistics){
    if(String(stat).startsWith('r') || statistics[stat]%2 != 0){
        console.log(statistics[stat]);
    }
}
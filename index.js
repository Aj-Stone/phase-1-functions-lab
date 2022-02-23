function distanceFromHqInBlocks(x){
    if(x<=42){
        return 42-x
    }
    else{
        return x-42
    }
}

function distanceFromHqInFeet(y){
    return distanceFromHqInBlocks(y)*264
}

function distanceTravelledInFeet(start,destination){
    if(start>destination){
        return (start-destination)*264
    }
    else{
        return (destination-start)*264
    }
}


function calculatesFarePrice(start, destination){
    let blockDistance=Math.abs(start-destination)
    let feetTravelled=blockDistance*264
    if(feetTravelled<=400){
        return 0
    }
    else if(feetTravelled>=2500){
        return 'cannot travel that far'
    }
    else if(400<feetTravelled && feetTravelled<2000){
        return (feetTravelled-400)*.02
    }
    else if(2000<feetTravelled && feetTravelled<2500){
        return 25
    }
}
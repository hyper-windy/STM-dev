var Helper = cc.Class.extend();

Helper.shuffle = function(array){
    var currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
  
    return array;
};

Helper.equalPoint = function(p1, p2){
    return p1.x == p2.x && p1.y == p2.y;
}

Helper.getFullNeibours = function(array, point){
    var temp = [];
    for(var i = -1; i <= 1; i++){
        for (var j = -1; j <= 1; j++){
            if (i == 0 && j == 0) continue;
            temp.push(array[point.x + i][point.y + j]);
        }
    }
    return temp;
}

Helper.checkPointInList = function(point, listPoint){
    for (var i = 0; i < listPoint.length; i++){
        if(Helper.equalPoint(point, listPoint[i])) return true;
    }
    return false;
}
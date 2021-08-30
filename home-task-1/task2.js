function drawChessboard() {
    let height = 8;
    let firstRow = 'wbwbwbwb';
    let secondRow = 'bwbwbwbw';
    for (let i = 0; i < height; i++) {
        if ( i%2 == 0 ){
            console.log(firstRow);
        }
        else {
            console.log(secondRow);
        }
    }

}

drawChessboard();

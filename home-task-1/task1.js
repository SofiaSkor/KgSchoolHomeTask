function drawTriangle(height) {

    let i = 0;
    let show = '#'
    while (i < height) {
        console.log(show);
        i++;
        show = show + '#';
    }
}
drawTriangle(3);

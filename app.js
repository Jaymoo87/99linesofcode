
const friends = ['Jamie', 'Jen', 'Sequoya', 'Jeff', 'Logan'];


function lines() {
    let lastLine;
    let lastWords;
}

for (i = 0, a = 0; i == 0; ++a) {
    if (a == friends.length) {
        break;
    }
    else {
        console.log(friends[a] + ":");



        for (i = 99; i >= 1; --i) {


            if (i == 1) {

                lastLine = "line of code";
                LastWords = "no more lines of code in the file "
                console.log(i + " lines of code in the file, " + i + " lines of code; " + friends[a] + " stikes one out, clears it all out, " + lastWords);

            } else {


                lastLine = " lines of code";
                lastWords = i - 1 + " lines of code in the file";
                console.log(i + " lines of code in the file, " + i + " lines of code; " + friends[a] + " stikes one out, clears it all out, " + lastWords);

            }
        }


    }


}



lines();

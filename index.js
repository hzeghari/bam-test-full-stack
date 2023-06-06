// Import stylesheets
import './helpers/style.css';
import * as helper from './helpers/helpers.js';

// VOTRE NOM ET PRENOM ICI !


function solutionExercice1(N) {
    //TAPE LE CODE DE L'EXERCICE 1 ICI!
    var nArray = N.toString().split('');
    var i = 0;

    while (i < nArray.length - 1) {
        if (nArray[i] > nArray[i + 1]) {
            nArray[i]--;
            for (var j = i + 1; j < nArray.length; j++) {
                nArray[j] = '9';
            }
            i = -1;
        }
        i++;
    }

    return parseInt(nArray.join(''));
}


function solutionExercice2(L) {
    var res = "EXERCICE 2"
    //TAPE LE CODE DE L'EXERCICE 2 ICI!
    L.sort((a, b) => a - b);

    var nextPosInt = 1;

    for (var i = 0; i < L.length; i++) {
        if (L[i] > 0 && L[i] > nextPosInt) {
            break;
        } else if (L[i] > 0 && L[i] == nextPosInt) {
            nextPosInt++;
        }
    }

    return nextPosInt;
}
function solutionExercice3(L) {
    var res = "EXERCICE 3"
    //TAPE LE CODE DE L'EXERCICE 3 ICI!
    var counts = {};

    for (var i = 0; i < L.length; i++) {
        if (counts[L[i]] === undefined) {
            counts[L[i]] = 1;
        } else {
            counts[L[i]]++;
        }
    }

    for (var num in counts) {
        if (counts[num] === 1) {
            return parseInt(num);
        }
    }

    return null;
}

helper.displayOnHtml(solutionExercice1(1000),'1')
helper.displayOnHtml(solutionExercice2([1,4,7,5,3,6,3]),'2')
helper.displayOnHtml(solutionExercice3([1,5,3,6,4,3,1,5,4]),'3')
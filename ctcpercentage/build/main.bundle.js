'use strict';

var calculateMonthlyPayment = function calculateMonthlyPayment(prevctc, currentctc) {
    if (prevctc && currentctc) {
        var subVal = currentctc - prevctc;
    }
    var percent = subVal / prevctc * 100;
    return percent;
};

document.getElementById('calcBtn').addEventListener('click', function () {
    var prevctc = document.getElementById("prev-ctc").value;
    var currentctc = document.getElementById("current-ctc").value;
    var percentVal = calculateMonthlyPayment(prevctc, currentctc);
    document.getElementById("percent").innerHTML = percentVal.toFixed(2);
});

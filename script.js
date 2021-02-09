function compute()
{
    if (check()) {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    years = parseInt(years) + 2021;
    var result = document.getElementById("result");
    result.innerHTML = `If you deposit ${principal},
                        at an interest rate of ${rate}%.
                        You will receive an amount of ${interest},
                        in the year ${years}`;
    }
}

function ValueRate(rate) {
    var V = document.getElementById("ValueOfRate");
    V.innerHTML=`${rate} %`
}

function check() {
    var principal = document.getElementById("principal");
    var IntValue = parseInt(principal.value)
    if (IntValue == 0 || IntValue < 0)
    {
        alert("Enter a positive number");
        principal.focus();
        return false
    }
    return true;
}
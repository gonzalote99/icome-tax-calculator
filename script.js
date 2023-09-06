function taxCalculate() {
  var incomeamt =  document.getElementById('incomeamount').value;

  if(incomeamt < 250) {
    var tax = 0;
  }

  else if(incomeamt > 250 && incomeamt <= 500) {
    var tax = (incomeamt-250)*0.05;
  }

  else if(incomeamt > 500 && incomeamt <= 750) {
    var tax = 250 * 0.05 + (incomeamt-500)*0.1;
  }
  else if(incomeamt > 750 && incomeamt <= 1000) {
    var tax = 250*0.05+250*0.1+(incomeamt-750)*0.15;

  }
  else if(incomeamt > 1000 && incomeamt <= 1250) {
    var tax = 250*0.05+250*0.1+250*0.15+(incomeamt-1000)*0.2
  }

  else if(incomeamt > 1250 && incomeamt <= 1500) {
    var tax = 250*0.05+250*0.1+250*0.15+250*0.2(incomeamt - 1250)*0.25
  }
  else if(incomeamt > 1500) {
    var tax = 250*0.05+250*0.1+250*0.15+250*0.2+250*0.25+(incomeamt-1500)*0.3;
  }

  alert('total tax is ' + tax)
}
let brexButton = document.getElementById('brex');
let stripeButton = document.getElementById('stripe');
let amexButton = document.getElementById('amex');
let results = document.getElementById('results');
let vbill = document.getElementById('vbill');
let form = document.getElementById('form');
function invalidForm(){
    return form["ven"].value == "" || form["media"].value == "" || form["corp"].value == "" || form["team"].value == "";
}
function sumOfFields(){
    var vendor = Number(form["ven"].value);
    var media = Number(form["media"].value);
    var corp = Number(form["corp"].value);
    var team = Number(form["team"].value);
    var sum = vendor + media + corp + team;
    return sum;
}
function addData(percentage, company){
    results.innerHTML = '';
        var brex = sumOfFields()*percentage;
        var unlimited = sumOfFields()*1.1;
        var lifetime = sumOfFields()*1.2;
        var brexProgess = document.createElement('progress');
        brexProgess.setAttribute('id', `brex-progress`);
        brexProgess.setAttribute("value", `${brex}`);
        brexProgess.setAttribute('max', `${sumOfFields()}`);
        var brexLabel = document.createElement('label');
        brexLabel.setAttribute("for", "brex-progress");
        brexLabel.innerText = `${company} Business Card`;
        var brexSpan = document.createElement('span');
        brexSpan.innerText = `$ ${Math.round(brex, 2)}`;
        
        results.appendChild(brexLabel);
        results.appendChild(brexProgess);
        results.appendChild(brexSpan);
        var br = document.createElement('br');
        results.appendChild(br);
        var lifetimeLabel = document.createElement('label');
        lifetimeLabel.setAttribute('for', 'lifetime');
        lifetimeLabel.innerText = "Lifetime";
        lifetimeProgress = document.createElement('progress');
        lifetimeProgress.setAttribute('id', 'lifetime');
        lifetimeProgress.setAttribute('value', `0`);
        lifetimeProgress.setAttribute('max', `${sumOfFields()}`);
        var lifetimeSpan = document.createElement('span');
        lifetimeSpan.innerText = `$ ${lifetime}`;
        var br = document.createElement('br');
        results.appendChild(lifetimeLabel);
        results.appendChild(lifetimeProgress);
        results.appendChild(lifetimeSpan);
        results.appendChild(br);
        var lifetimeLabel = document.createElement('label');
        lifetimeLabel.setAttribute('for', 'unlimited');
        lifetimeLabel.innerText = "Unlimited";
        lifetimeProgress = document.createElement('progress');
        lifetimeProgress.setAttribute('id', 'unlimited');
        lifetimeProgress.setAttribute('value', `${sumOfFields()}`);
        lifetimeProgress.setAttribute('max', `${sumOfFields()}`);
        var lifetimeSpan = document.createElement('span');
        lifetimeSpan.innerText = `$ ${unlimited}`;
        var br = document.createElement('br');
        results.appendChild(lifetimeLabel);
        results.appendChild(lifetimeProgress);
        results.appendChild(lifetimeSpan);
        results.appendChild(br);
}

brexButton.addEventListener('click', function(){
    addData(0.3, "Brex");
})
stripeButton.addEventListener('click', function(){
    addData(2.9, "Stripe");
});
amexButton.addEventListener('click', function(){
    addData(1.3, 'Amex');
});
let Complex = require('complex.js');

function laps(n) {
	var out = [];
	for(i=0;i<=(n/2);i++){
		out[i]=2*i;
	}
	j=2
	while(out.length < n){
		out.splice(j,0,-1*out[j-1]);
		j+=2
	}
	return out;
}

function Roots(n){
	var out = [];
	var turns = laps(n);
	ci = Complex.I;
	cpi = Complex.PI;
	for(i=0;i<n;i++){
		ct = new Complex(turns[i]);
		top = ci.mul(cpi).mul(ct).div(n);
		out[i] = Complex.E.pow(top.re, top.im);
	}
	return out;
}

for(k=0;k<32;k++){
	console.log(Roots(32)[k].mul(32).round());
}
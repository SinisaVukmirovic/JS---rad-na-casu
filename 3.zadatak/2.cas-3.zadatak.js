//3.zadatak - Izracunati faktorijel
var N = prompt("Izracunaj faktorijel broja:");
var factor = 1;
for (i = 2; i <= N; i++) {
	factor = factor * i;
}
console.log(factor);


//2.cas-2.zadatak - suma prvih N prirodnih brojeva
var N = prompt("Enter whole, positive natural number");
if (N < 0 || N % 1 != 0) {
	alert("Number must be whole and positive!");
}
var sum = 0;
for (i = 1; i <= N; i++) {
	sum += i;
}
console.log(sum);
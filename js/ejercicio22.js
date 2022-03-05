


var a = new Number();
var b = new Number();
a = 0;
b = 1;
while (b<200) {
    document.getElementById(a,'<BR/>');
    document.write(b,'<BR/>');
    a = a+b;
    b = b+a;
}
document.write(a,'<BR/>');
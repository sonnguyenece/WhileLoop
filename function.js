function Sum() {
    let sum=0;
    let n=0;
while(n!=-1){
    n=parseInt(prompt('Nhap vao 1 so bat ky. Nhap -1 de thoat '));
    if(n==-1)break;
    sum+=n;
    alert(sum);
    }
}
function Display() {
    let i=1;
    while(i<=100){
        document.write("<hr width = " + i + "%>");
        i++;
    }
}
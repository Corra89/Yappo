let passaggi=[{"line":"76","hour":"17:16:22","realtime":false},{"line":"44","hour":"17:20:44","realtime":true},{"line":"76","hour":"17:36:22","realtime":false},{"line":"76","hour":"17:53:22","realtime":true},{"line":"44","hour":"17:54:08","realtime":false},{"line":"76","hour":"18:10:22","realtime":false},{"line":"44","hour":"18:24:08","realtime":true},{"line":"76","hour":"18:28:22","realtime":false},{"line":"76","hour":"18:46:22","realtime":false},{"line":"44","hour":"18:54:08","realtime":false}];

/*fetch('https://gpa.madbob.org/query.php?stop='+NUMERO)
  .then(response => response.json())
  .then(passaggi =>{ console.log(passaggi) });*/

let tabella=[]

function myFunction (){
    for (passaggio of passaggi){
    let tdline = document.createElement('td');
    tdline.innerHTML = passaggi.line;
    let tdhour = document.createElement ('td');
    tdhour.innerHTML = passaggi.hour;
    let tdreal = document.createElement ('td');
    tdreal.innerHTML = document.createElement ('td');
    tabella.className = "tabella";
    tdline.className = "linea";
    tdhour.className = "orari";
    line.appenChild(linea);
    linea.appenChild(tabella);

}} 
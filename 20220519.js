const nezoter = document.getElementById("szinhazterem");

const tabla = document.createElement("table");

let szekek = new Array();

for (let i = 1; i <= 10; i++) {
    szekek[i] = new Array();
    let sor = document.createElement("tr");
    for (let j = 1; j <= 15; j++) {
        szekek[i][j] = j;
        let cella = document.createElement("td");
        cella.innerHTML = szekek[i][j];
        cella.className = "szabad";
        cella.id = "szekek" + i + j;

        sor.appendChild(cella);


    }


    tabla.appendChild(sor);
}
nezoter.appendChild(tabla);

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 15; j++) {
        document.getElementById("szekek" + i + j).addEventListener("click", foglalas);
        function foglalas() {
            if (document.getElementById("szekek" + i + j).className == "szabad") {
                document.getElementById("szekek" + i + j).className = "foglalt";
            }
            else {
                document.getElementById("szekek" + i + j).className = "szabad";
            }
            let foglaltszam = document.getElementsByClassName("foglalt");
            

            document.getElementById("foglaltszam").innerHTML=foglaltszam.length;
            document.getElementById("szabadszam").innerHTML=150-foglaltszam.length;


        }
    }
}
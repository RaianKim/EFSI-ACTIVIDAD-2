let nuevaTarea = document.getElementById("Tarea");
let Tareas = [
    /*{
        Nombre: "Limpiar mi cuarto",
        Check: false
    },*/
    /*{
        Nombre: "Lavar la ropa",
        Check: true
    }*/
]

Agregar = () =>
{
  let aux = document.getElementById("textoTarea").value;
  Tareas.push({Nombre: aux,Check: false});
  MostrarHtml();
}

deshabilitar = (aux,tarea,num) =>
{
    let output = document.getElementById(aux);
    output.innerHTML="";
    output.innerHTML+=`<div id="cb${aux}"><li id="cb${aux}"style="text-decoration:line-through;color: gray;">${tarea}<input class="form-check-input" type="checkbox" id="flexCheckChecked " onclick="deshabilitar('${aux}',${tarea})" Checked disabled> </li></div>`
    Tareas[num].Check = true; 
}

MostrarHtml = () =>
{
    let output = document.getElementById("tareas-ul")
    output.innerHTML = "";
    let tachadoONo = "";
    let checkeadoONo = "";
    let aux=0;
    Tareas.forEach(n => {
        if(n.Check)
        {
            tachadoONo = "text-decoration:line-through;color: gray;"
            checkeadoONo = "checked disabled"
        }
        else
        {
            tachadoONo=""
            checkeadoONo=""
        }
        
        output.innerHTML+=`<div id="cb${aux}"><li style="${tachadoONo}">${n.Nombre}<input class="form-check-input" type="checkbox" id="flexCheckChecked " onclick="deshabilitar('cb${aux}','${n.Nombre}',${aux})" ${checkeadoONo}> </li></div>`
        aux++;
    });
    document.getElementById('textoTarea').value = '';
}
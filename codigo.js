let nuevaTarea = document.getElementById("Tarea");
let Tareas = [
    /*{
        Nombre: "Limpiar mi cuarto",
        Check: false
    },*/
    /*{
        Nombre: "Lavar la ropa",
        Check: true,
        TiempoCreado: Date.now(),
        TiempoTerminado: null,
    }*/
]

Agregar = () =>
{
  let aux = document.getElementById("textoTarea").value;
  Tareas.push({Nombre: aux,Check: false,TiempoCreado: Date.now(),TiempoTerminado: null});
  MostrarHtml();
}

deshabilitar = (aux,tarea,num) =>
{
    let output = document.getElementById(aux);
    output.innerHTML="";
    output.innerHTML+=`<div id="cb${aux}"><li id="cb${aux}"style="text-decoration:line-through;color: gray;">${tarea}<input class="form-check-input" type="checkbox" id="flexCheckChecked " onclick="deshabilitar('${aux}',${tarea})" Checked disabled> </li></div>`
    Tareas[num].Check = true; 
    Tareas[num].TiempoTerminado = ((Date.now() - Tareas[num].TiempoCreado)/1000).toFixed(1);
}

tareaMasRapida = () =>
{
    let auxNum = 0;
    let auxTar = null;
    Tareas.forEach(t => {

        if(t.Check)
        {
            if(auxNum == 0)
            {
                auxNum = t.TiempoTerminado;
                auxTar = t.Nombre
            }
            if(t.TiempoTerminado < auxNum)
            {
                auxNum = t.TiempoTerminado
                auxTar = t.Nombre
                
            }
        }
        console.log(t.TiempoTerminado,t.Nombre)
    });
    document.getElementById("tareaMasRapida").innerHTML =`La tarea mas rapida en resolverse fue: ${auxTar}, con ${auxNum} segundos`
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
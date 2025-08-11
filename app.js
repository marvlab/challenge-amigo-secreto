// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//let amigos= ["Carlos","Maria","Jesus","Marco"]
//let nombre=amigos[2];
//console.log(nombre)

  // Array para almacenar los nombres
        const listaAmigos = [];
        
        function agregarAmigo() {
            // Obtener el valor del input
            const input = document.getElementById('nombreAmigo');
            const nombre = input.value.trim();
            document.getElementById('resultado').innerHTML='';
            // Validar que no esté vacío
            if (nombre === '') {
                alert('Por favor ingresa un nombre');
                return;
            }
            
            // Agregar al array
            listaAmigos.push(nombre);
            // Actualizar la lista en el HTML
            actualizarLista();
            // Limpiar el input
            input.value = '';
            
            // Mostrar valores de prueba en consola
            console.log('Amigos actuales:', listaAmigos);
        }

        function actualizarLista() {
            const ul = document.getElementById('listaAmigos');
            ul.innerHTML = ''; // Limpiar lista
            
            // Recorrer el array y crear elementos <li>
            listaAmigos.forEach(amigo => {
                const li = document.createElement('li');
                li.textContent = amigo;
                ul.appendChild(li);
            });
        }

        function sortearAmigo() {
             if (listaAmigos.length=== 0){
                alert('Agregar por lo menos un amigo');
                return;
             }   

            // Obtener un índice aleatorio
            const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
            
            // Obtener el nombre del amigo sorteado
            const amigoSorteado = listaAmigos[indiceAleatorio];
            
            // Limpiar lista de nombres ingresados
            document.getElementById('listaAmigos').innerHTML = '';
            // Mostrar solo el resultado
             document.getElementById('resultado').innerHTML=`<li>El amigo sorteado es: <strong>${amigoSorteado}</strong></li>`;
            //Vaciamos el array para evitar alterar el sorteo
            listaAmigos.length=0;
            
        }




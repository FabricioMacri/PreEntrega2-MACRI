function restoMatch(listaResto) {

    this.listaResto = listaResto;

    //Este metodo acomoda la lista de Restauranes que recibe en funcion del puntaje usando el metodo sort

    this.ordenarPuntuacion = function(lista) {
        
        lista.sort( (a,b) => {
            if(a.Puntuacion < b.Puntuacion) return 1;
            if(a.Puntuacion > b.Puntuacion) return -1;
            if(a.Puntuacion == b.Puntuacion) return 0;
        });
        return lista;

    }
    //Todos los metodos que estan a continuacion se encargan de filtrar por la lista de restaurantes en funcion del parametro de busqueda
    // utilizando el metodo filter

    this.filtrarZona = function(Zona) {

        let Aux = this.listaResto.filter((resto) => resto.Zona == Zona);
        return Aux;
    }

    this.filtrarTipo = function(cliente) {

        let Aux = this.listaResto.filter((resto) => resto.Tipo == cliente.Tipo);
        return Aux;
    }

    this.filtrarEstilo = function(cliente) {

        let Aux = this.listaResto.filter((resto) => resto.Estilo == cliente.Estilo);
        return Aux;
    }

    //En este caso al tener como atributo una lista recorremos componente a componente con forEach y solo lo agregamos si corresponde 
    // utilizando some

    this.filtrarServicio = function(cliente) {

        listafiltrada = []

        this.listaResto.forEach(resto => { 

            let Aux = resto.Servicio.some( (servicio) => servicio == cliente.Servicio ); 
            if(Aux) {
                lista.push(resto);
            }
        
        } );
        
        return lista;
    }

    //En este metodo se utilizan todos los anteriores combinados con some para cada elemento cumpla con todas las condiciones
    // y al final aquellos que quedaron seleccionados se ordenan en funcion de su puntuacion

    this.ordenarPreferencias = function(cliente) {

        lista = []

        barrio = this.filtrarZona(cliente.Zona);
        tipo = this.filtrarTipo(cliente);
        estilo = this.filtrarEstilo(cliente);
        servicio = this.filtrarServicio(cliente);


        barrio.forEach(resto => { 

            cond1 = tipo.some( (resto2) => resto.ID === resto2.ID );
            cond2 = estilo.some( (resto2) => resto.ID === resto2.ID );
            cond3 = servicio.some( (resto2) => resto.ID === resto2.ID );

            if ((cond1 == true) && (cond2 == true) && (cond3 == true)) {
                
                listafiltrada.push(resto)}
            
         });

        if (listafiltrada.length > 0) {
            
            listafiltrada = this.ordenarPuntuacion(listafiltrada);
            
        }



        return listafiltrada;
    }

  }
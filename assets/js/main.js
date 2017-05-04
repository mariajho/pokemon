function Pokemon(nombre, color, nivelDeAmistad, vida, poderDeAtaque){
	this.nombre = nombre;
	this.color = color;

	this.nivelDeAmistad = nivelDeAmistad;

	this.vida = vida;
	this.poderDeAtaque = poderDeAtaque;
	
	this.mostrarPokemon = function(){
		return(" Hola, soy: " + this.nombre + " soy de color: " + this.color)
	}

	this.aumentarAmistad = function(valor){
		this.nivelDeAmistad = this.nivelDeAmistad + valor
	}

	this.atacar = function(pokemon){
	pokemon.vida = pokemon.vida - this.poderDeAtaque


	}
}
	/*var pikachu = new Pokemon('pikachu', 'amarillo', 30, 100, 50)
      var charmander = new Pokemon('charmander', 'rojo', 10, 20, 40)*/
    
	
	function atacar(){
		var pokemon1 = document.getElementById("Pokemon1").value;
		var pokemon2 = document.getElementById("Pokemon2").value;

		var pelea1 = new Pokemon(pokemon1, "amarillo", 10, 200, 50);
		var pelea2 = new Pokemon(pokemon2, "rojo", 20, 300, 30);

		if(pelea1.nombre == pelea2.nombre){
			alert("no se puede ejecutar")
		}

	pelea1.atacar(pelea2);

	var resultado = document.getElementById("Mostrar");
	var muestra = (pelea1.nombre + " ataco a " + pelea2.nombre + " entonce " + pelea2.nombre +  " tiene vidas restantes " + pelea2.vida);
		resultado.innerHTML = muestra;

  }  

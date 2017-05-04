function Pokemon(nombre, color, nivelDeAmistad, vida, poderDeAtaque, pelear){
	this.nombre = nombre;
	this.color = color;

	this.nivelDeAmistad = nivelDeAmistad;

	this.vida = vida;
	this.poderDeAtaque = poderDeAtaque;
	this.pelear = pelear;

	this.mostrarPokemon = function(){
		return('Hola, soy: ' + this.nombre + ' soy de color: ' + this.color)
	}

	this.aumentarAmistad = function(valor){
		this.nivelDeAmistad = this.nivelDeAmistad + valor
	}

	this.atacar = function(pokemon){
		pokemon.vida = pokemon.vida - this.poderDeAtaque
	}
}


    var pikachu = new Pokemon('pikachu', 'amarillo', 30, 100, 50, 20)
    var charmander = new Pokemon('charmander', 'rojo', 10, 20, 40, 30)

    pikachu.atacar(charmander)

    console.log(charmander.vida)

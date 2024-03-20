$(document).ready(function() {
    $('#fetchDataBtn').click(function() {
        // Show background image after clicking the button
        $('body').css('background-image', 'url(images/vines.jpg)');

        // Fetch data from PokeAPI
        fetch('https://pokeapi.co/api/v2/pokemon/1/')
            .then(response => response.json())
            .then(data => {
                // Process and display data
                console.log(data);
                $('#pokemonInfo').html(`
                    <p>Name: ${data.name}</p>
                    <p>Base Experience: ${data.base_experience}</p>
                    <p>Height: ${data.height}</p>
                    <p>Weight: ${data.weight}</p>
                    <p>Forms: ${data.forms.map(form => form.name).join(', ')}</p>
                    <p>Moves: ${data.moves.map(move => move.move.name).join(', ')}</p>
                    <p>Species: ${data.species.name}</p>
                    <p>Types: ${data.types.map(type => type.type.name).join(', ')}</p>
                    <p>Stats: ${data.stats.map(stat => `${stat.stat.name}: ${stat.base_stat}`).join(', ')}</p>
                    <p>Order: ${data.order}</p>
                    <p>Abilities: ${data.abilities.map(ability => ability.ability.name).join(', ')}</p>
                `);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                $('#pokemonInfo').html('<p>Error fetching data</p>');
            });
    });
});

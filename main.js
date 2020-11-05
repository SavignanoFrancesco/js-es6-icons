$(document).ready(() => {

    //array che ha come oggetti le icone di fontawesome
    const icons = [
        {
            name: 'cat',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'crow',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'dog',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'dove',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'dragon',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'horse',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'hippo',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'fish',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas'
        },
        {
            name: 'carrot',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas'
        },
        {
            name: 'apple-alt',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas'
        },
        {
            name: 'lemon',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas'
        },
        {
            name: 'pepper-hot',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas'
        },
        {
            name: 'user-astronaut',
            prefix: 'fa-',
            type: 'user',
            family: 'fas'
        },
        {
            name: 'user-graduate',
            prefix: 'fa-',
            type: 'user',
            family: 'fas'
        },
        {
            name: 'user-ninja',
            prefix: 'fa-',
            type: 'user',
            family: 'fas'
        },
        {
            name: 'user-secret',
            prefix: 'fa-',
            type: 'user',
            family: 'fas'
        }
    ];

    //
    const icon_types = [];

    //scorro le icone e aggiungo il colore a seconda del tipo
    icons.forEach((element) => {

        //prelevo il tipo dall'icona
        const {type} = element;

        //aggiungo le opzioni al select
        if (!icon_types.includes(type)) {
            icon_types.push(type);
            $('.icontypes').append(`
                <option value="${type}">${type}</option>
                `);
        }

        //aggiungo il colore alle icone a seconda del tipo
        if (type == 'animal') {
            element.color = 'red';
        }else if (type == 'vegetable') {
            element.color = 'green';
        }else if (type == 'user') {
            element.color = 'blue';
        }

        return element;

    });
    console.log(icon_types);
    console.log(icons);

    //stampo tutte le icone
    printAllTypes(icons);

    //se cambia l'opzione di select
    $('.icontypes').change(() => {

        //rimuovi le icone
        $('.icons-container').empty();

        //inizializzo l'opzione selezionata
        const selected_type = $('.icontypes').val();
        console.log(selected_type);

        //se seleziono tutti i tipi
        if (selected_type == 'all_types') {
            //stampa tutte le icone
            printAllTypes(icons);


        }else if(selected_type == 'animal'){

            printSelectedType(icons,selected_type);

        }else if(selected_type == 'vegetable'){

            printSelectedType(icons,selected_type);

        }else if(selected_type == 'user'){

            printSelectedType(icons,selected_type);

        }

    });


});

//stampa tutti i tipi di icona
function printAllTypes(icons_array){
    icons_array.forEach((element) => {
        const {name, prefix, type, family, color} = element;
        $('.icons-container').append(`
        <div class="icon">
            <i class="${family} ${prefix}${name} fa-2x" style="color:${color}"></i>
            <p>${name}</p>
        </div>
        `);
    });
}

//stampa i tipi di icona selezionata
function printSelectedType(icons_array,chosen_type){
    icons_array.forEach((element) => {

        //prelevo il tipo dall'icona
        const {type} = element;

        //stampo il tipo selezionato
        if (type == chosen_type) {
            const {name, prefix, type, family, color} = element;
            $('.icons-container').append(`
            <div class="icon">
                <i class="${family} ${prefix}${name} fa-2x" style="color:${color}"></i>
                <p>${name}</p>
            </div>
            `);
        }



    });
}

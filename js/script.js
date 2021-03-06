// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
// 
// Milestone 2
// Coloriamo le icone per tipo
// 
// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone

const icons = [
  {
    name: 'apple-alt',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'ice-cream',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'fish',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'lemon',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'hamburger',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'pizza-slice',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'beer',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-whiskey',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'wine-bottle',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'cocktail',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'coffee',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-martini',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'dragon',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'kiwi-bird',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'frog',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'hippo',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'otter',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'horse',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
];

//Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.

//ciclo su each elemnto di array
/* icons.forEach((item) =>{
  const IconsSpace = $(".icons");

  //deconstrut per semplicit??
  const { family, prefix, name} = item;

  //creo il template e lo stampo a schermo
  const Template = `<div>
      <i class="${family} ${prefix}${name}"></i>
      <div class="title">${name}</div>
    </div>
  `;

  IconsSpace.append(Template)

}); */

// Milestone 2
// Coloriamo le icone per tipo
//inizializzo un array vuoto e ci metto dentro i tipi 
const AllCategory = [];
const Color = ["coral", "brown", "orange"];

icons.forEach((item) => {
  const ItemCategory = item.category;

  if(!AllCategory.includes(ItemCategory)){
    AllCategory.push(ItemCategory);
  };
});

/* console.log(AllCategory); */
//fare in modo che la posizione del colore sia legata a quella della categoria e poi
//ottenere un oggetto che ha al suo inteno la key colore e stampare

const IconsColor = icons.map((item) => {

  const ThisColor = Color[AllCategory.indexOf(item.category)];
  const ItemColor = Object.assign({}, item);
  ItemColor.color = ThisColor;

  return ItemColor;

});
//stampo a schermo le icone colorate con il codice scritto in precendenza ma modificando il tmplate.
printTheElements(IconsColor);

//Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone
//prendo tutti i tipi e li appendo nella select
AllCategory.forEach((item) => {
  const SelectSpace = $("#type");

  const Template = `<option value="${item}">${item}</option>`;

  SelectSpace.append(Template);
});
//filtro per classe le icone e le appendo 
$("#type").change(function(){
  let categoryIconsColor = IconsColor.filter((item) => {

    const SelectValue = $("#type").val();
    if (item.category == SelectValue) {
      return item;
    }
  });
//elimino le icone prima di appendere quelle nuove
//console.log($("#type").val());
  const IconsSpace = $(".icons");

  IconsSpace.html(" ");

  if (categoryIconsColor.length == 0) {
    categoryIconsColor = IconsColor;
  }
  
  printTheElements(categoryIconsColor);

});

function printTheElements(arr){
  arr.forEach((item) => {
    const IconsSpace = $(".icons");

    //deconstrut per semplicit??
    const { family, prefix, name, color } = item;

    //creo il template e lo stampo a schermo
    const Template = `<div>
        <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
        <div class="title">${name}</div>
      </div>
    `;

    IconsSpace.append(Template);

  });
}
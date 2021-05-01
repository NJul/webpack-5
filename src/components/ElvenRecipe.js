const ElvenRecipe = () => {
  const elvenShieldRecipe = {
    leatherStrips: 2,
    ironIngot: 1,
    refinedMoonstone: 4,
  };

  const elvenGountRecipe = {
    ...elvenShieldRecipe,
    leather: 1,
    refinedMoonstone: 6,
  };

  console.log(elvenShieldRecipe);
  console.log(elvenGountRecipe);

  const element = document.createElement('div');
  const element2 = document.createElement('h2');
  const element3 = document.createElement('p');

  element2.innerHTML = 'Elvin Recipe';

  element.append(element2);

  element3.innerHTML +=
    '<pre>' + JSON.stringify(elvenShieldRecipe, null, 1) + '</pre>';

  element3.innerHTML +=
    '<pre>' + JSON.stringify(elvenGountRecipe, null, 1) + '</pre>';

  element.append(element3);

  return element;
};

export default ElvenRecipe;

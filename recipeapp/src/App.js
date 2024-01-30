import logo from './logo.svg';
import Accordion from 'react-bootstrap/Accordion';
import './App.css';

function App() {
  return (
    <div className="App">
      <recipesfromqipingzhang />
    </div>
  );
}


function recipesfromqipingzhang() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Salty Crispy Chicken (Salted Fried Chicken)</Accordion.Header>
        <Accordion.Body>
        <div align="left">
        Procedure:<br />
                      1.Cut chicken into pieces. Mix seasonings with chicken. Marinate for at least an hour.<br />
                      2.Combine ingredients for batter. Set aside.<br />
                      3.Heat oil in a pan over medium heat. Dip marinated chicken pieces first in batter, then deep fry until golden brown and crisp. Drain excess oil on paper towels. Serve immediately.<br />
        Ingredients:<br />
                     500 grams chicken thighs<br />
                     1 tablespoon salt<br />
                     1 teaspoon ground white pepper<br />
                     1 tablespoon cooking oil<br />
                    For batter:<br />
                     1 cup plain flour<br />
                     1 egg<br />
                     1 tablespoon water<br />
          < img src="1.jpeg"width="300px" height="200px"></img>
        </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Mushroom soup</Accordion.Header>
        <Accordion.Body>
        <div align="left">
        Procedure:<br />
                      1.Melt 2 tablespoons of the butter in a large pot such as a Dutch oven over medium-high heat. Add the garlic and shallot, cook for 1 minute, until they begin to soften. Add the mushrooms and cook for about 3 minutes, until tender and browned. Transfer all the contents of the pot to a bowl.<br />
                      2.Add the remaining 1 tablespoon of butter to the pot. Once melted, sprinkle in the flour and whisk it quickly into a paste. Reduce the heat to medium. Add the stock a little at a time, whisking out the clumps between each addition.<br />
                      3.Increase the heat back to medium-high and allow the soup to simmer well for 3 minutes. Add the mushrooms back to the pot and continue to cook for 2 more minutes. The stock will thicken slightly to be somewhat creamy.<br />
                      4.Let cook for 3 to 4 minutes, then ladle into bowls. Garnish with mushrooms and parsley, if desired.<br />
                      3 tablespoons unsalted butter
        Ingredients:<br />
                      1.2 garlic cloves, minced<br />
                      2.1 shallot, finely chopped<br />
                      3.4 ounces crimini mushrooms, chopped<br />
                      4.4 ounces white button mushrooms, chopped<br />
                      5.2 tablespoons all-purpose flour<br />
                      6.3 cups chicken stock<br />
                      7.¼ teaspoon fine sea salt, or to taste<br />
                      8.¼ teaspoon ground black pepper, or to taste<br />
                      9.Sliced sautéed mushrooms for garnish, optional<br />
                      10.Chopped parsley for garnish, optional<br />
        < img src="2.jpeg"width="300px" height="200px"></img>
        </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default App;
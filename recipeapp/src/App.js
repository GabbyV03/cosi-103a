// import logo from './logo.svg';
import Accordion from 'react-bootstrap/Accordion';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Best Recipes</h1>
        <BasicExample/>
      </header>
    </div>
  );
}

function BasicExample() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Cheesecake</Accordion.Header>
        <Accordion.Body>
        <div align="left">
          Description:<br />
              The filling for this delicious, easy cheesecake recipe has just eight
              simple ingredients, and the cake bakes in a mere 30 minutes.<br />
          <br />
          Ingredients:<br />
              (Crust)<br />
              1/2 cups (150g) graham cracker crumbs (about 10 whole crackers, crushed)<br />
              1/4 cup (28g) confectioners' sugar<br />
              6 tablespoons (85g) butter, melted <br />
              1/8 teaspoon table salt<br />
              (Filling)<br />
              two 8-ounce packages (452g) cream cheese, at room temperature<br />
              2/3 cup (133g) granulated sugar<br />
              2 large eggs, at room temperature<br />
              1 teaspoon vanilla extract<br />
          <br />
          Instructions:<br />
              1. Preheat the oven to 350°F.<br />
              2. To make the crust: Stir together all of the crust ingredients, 
              mixing until thoroughly combined.<br />
              3. Press the crumbs into the bottom and up the sides of your pie pan<br />
              4. To make the filling: Mix together the room-temperature cream cheese and 
              sugar until smooth. Mix in the eggs and vanilla, again mixing until smooth.<br />
              5. Set the pie pan onto a baking sheet, if desired; this protects the bottom of 
              the crust from any potential scorching. Pour the filling into the crust.<br />
              6. To bake the cheesecake: Place the cheesecake in the oven. 
              Bake it for 30 minutes.<br />
              7. Once the cake is cool, refrigerate it, covered, 
              until you're ready to serve it.<br />
          <img src="cheesecake.jpg" width="300px" height="200px" alt=""></img>
        </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default App;
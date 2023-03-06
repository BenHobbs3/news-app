import './App.css';
import './index.js';

function App() {


/** openAI API Call Function */


const apiKey = '';
const prompt = "'Give me one random word '"; 
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: apiKey,
});
const openai = new OpenAIApi(configuration);

async function generateResponse() {
  const response = await openai.createCompletion({
    model: "text-ada-001",
    prompt: prompt,
    temperature: 0.7,
    max_tokens: 500,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
    
  const responseData = response.data.choices[0].text;
  console.log(responseData);
  console.log("-------------------------------------------------------------------------------------------------------------------------");
    
  return(responseData);
}


  generateResponse();

  let newsName1 = "";

  return (
    <div className="App">
      <button className = "Circular1">{newsName1}</button>
      <button className = "Circular2">News2</button>
      <button className = "Circular3">News3</button>
      <button className = "Circular4">News4</button>
      <button className = "Circular5">News5</button>
      <button className = "Circular6">News6</button>
      <button className = "Circular7">News7</button>
      

    </div>
  );
}

function printme() {
  console.log("HAHAH");
}

export default App;

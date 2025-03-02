//Joke.js
function Joke(props) {
return (
<div>
<h3>{props.joke.setup}</h3>
<p>{props.joke.punchline}</p>
</div>
);
}
export default Joke;

//App.js
import Joke from "./Joke";
function App() {
const jokes = [
{ id: 1, setup: "Why don't scientists trust atoms?", punchline:
"Because they make up everything!" },
{ id: 2, setup: "Why did the scarecrow win an award?", punchline:
"Because he was outstanding in his field!" },
{ id: 3, setup: "What do you call fake spaghetti?", punchline: "An
impasta!" },
{ id: 4, setup: "How do you organize a space party?", punchline: "You
planet!" },
];
return (
<div>
<h1>Joke List</h1>
{jokes.map(function (joke) {
return <Joke key={joke.id} joke={joke} />;
})}
</div>
);
}
export default App;
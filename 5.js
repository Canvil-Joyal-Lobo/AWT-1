//5

import React,{useState} from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
function App() {
const [showCard, setShowCard] = useState(false);
const toggleCard = () => {
setShowCard((prev) => !prev);
};
return (
<div style={{ display: "flex"
, flexDirection: "column"
, alignItems: "center"
, marginTop: "50px"
}}>
<Button variant="contained" color="primary" onClick={toggleCard}>
{showCard ? "Hide Card" : "Show Card"}
</Button>
{showCard && (
<Card style={{ marginTop: "20px"
, width: "300px" }}>
<CardContent>
<Typography variant="h5" component="div">
Material UI Card
</Typography>
<Typography variant="body2" color="text.secondary">
This is a simple card that toggles visibility when you click the button above.
</Typography>
</CardContent>
</Card>
)}
</div>
);
}
export default App;
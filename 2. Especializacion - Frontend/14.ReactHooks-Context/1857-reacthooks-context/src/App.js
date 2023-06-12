import { useContext } from "react";
import { CounterContext } from "./Context";
import { Button } from "@mui/material";
import { MainSpace, ImageSpace, FormSpace } from "./styles";
import Form from "./Form";


function App() {
  const counterData = useContext(CounterContext);
  console.log(counterData);
  return (
    <MainSpace>
      <ImageSpace />
      <FormSpace>
        <Form/>
        <Button onClick={() => counterData.suma()}>+</Button>
        <Button onClick={() => counterData.resta()}>-</Button>
      </FormSpace>
    </MainSpace>
  );
}

export default App;
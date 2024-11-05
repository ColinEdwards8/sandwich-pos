import { HomePageStyles } from "../styles/HomePageStyles";
import { Header } from "../components/Header";
import { Button } from '@mui/material';

export const HomePage = () => {
  return (
    <HomePageStyles>
      <Header/>
      <div>
        <p>Sams Sandwihes</p>
        <Button variant="contained" size="large" href='/Order'>Start Order</Button>
      </div>
      <div></div>
    </HomePageStyles>
  );
};

export default HomePage;

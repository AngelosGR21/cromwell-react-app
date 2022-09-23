import { Button, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

import { sale, rent } from "../../assets/dummyData"

import HouseCard from "./HouseCard";


import "./Home.css"

const Home = () => {

    return (
        <>
            <section className="home-search-container">
                <div className="home-searchbar-container">
                    <TextField
                        className="home-searchbar"
                        placeholder="Enter an address or postcode..."
                        variant="outlined"
                    />
                    <Button
                        variant="contained"
                        className="home-search-button"
                        startIcon={<SearchIcon className="home-search-icon" />}
                    >Search
                    </Button>
                </div>
            </section>
            <section id="sale" className="home-card-container">
                <h2 className="home-card-header">BEST COLLECTION ON SALE</h2>
                {sale.map((house) => {
                    return <HouseCard house={house} key={house.id} />
                })}
            </section>
            <section id="rent" className="home-card-container">
                <h2 className="home-card-header">BEST COLLECTION FOR RENT</h2>
                {rent.map((house) => {
                    return <HouseCard house={house} key={house.id} />
                })}
            </section>
        </>
    )
}

export default Home
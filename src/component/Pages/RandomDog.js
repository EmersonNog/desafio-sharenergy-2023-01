import React from "react";
import styles from "../Styles/RandomDog.module.css"
import Footer from "../Layouts/Footer.js";
import Navbar from "../Layouts/Navbar.js";

class RandomDog extends React.Component {
    state = {
        imageUrl: ""
    };

    componentDidMount() {
        this.getRandomDog();
    }
    
    getRandomDog = () => {
        fetch('https://random.dog/woof.json?include=jpg')
          .then(response => response.json())
          .then(data => {
            this.setState({ imageUrl: data.url });
          });
      }
    

    render() {
        return(
                <div className={styles.container}>
                    <Navbar/>
                    <button onClick={this.getRandomDog}>Refresh</button>
                    <img src={this.state.imageUrl} alt="Random Dog" />
                    <div className={styles.footer}>
                        <Footer/>
                    </div>
                </div>
        );
    }
}

export default RandomDog;
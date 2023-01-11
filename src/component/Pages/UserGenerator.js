import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "../Styles/UserGenerator.module.css";
import Footer from '../Layouts/Footer.js';
import Navbar from '../Layouts/Navbar.js';

async function getUser(page, search) {
    try {
      if (search) {
        const response = await axios.get(`https://randomuser.me/api/?page=${page}&results=10&gender=${search}&nat=${search}`);
        return response.data;
      } else {
        const response = await axios.get(`https://randomuser.me/api/?page=${page}&results=10`);
        return response.data;
      }
    } catch (error) {
      console.error(error);
      return { results: [] };
    }
  }

function UserGenerator() {
    const [user, setUser] = useState([]);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState();

    let backward = page - 1;
    let forward = page + 1; 

    const handleSearch = (e) => {
        setSearch(e.target.value);
      };

    const searchUser = () => {
      async function fetchData() {
        const data = await getUser(1, search);
        setUser(data.results);
      }
      fetchData();
    };

    useEffect(() => {
      async function fetchData() {
        const data = await getUser(page, search);
        setUser(data.results);
      }
      fetchData();
    }, [page, search]);

  return (
    <div className={styles.mainDiv}>
      <Navbar/>
          <h1 className={styles.contatos}>Contatos</h1>
        <div className={styles.Container}>
            {user.map((user) =>(
                <div key={user.login.uuid} className={styles.informations}>
                    <img src={user.picture.large} alt={`Foto de ${user.name.first} ${user.name.last}`}/>
                    <p><b>Nome:</b> {user.name.first} {user.name.last}</p>
                    <p><b>E-mail:</b> {user.email}</p>
                    <p><b>Usuário:</b> {user.login.username}</p>
                    <p><b>Idade:</b> {user.dob.age}</p>
                </div>
            ))}
        </div>
        <section>
              <div className={styles.search}>
                  <input type="text" value={search} onChange={handleSearch} placeholder="Gênero ou a nacionalidade" />
                  <button onClick={searchUser}>Buscar</button>
              </div>
              <div className={styles.pages}>
                  <button onClick={() => setPage(page - 1)} disabled={page === 1}> Page: {backward}</button>
                  <button onClick={() => setPage(page + 1)}> Page: {forward}</button>
              </div>
        </section>
        <Footer/>
    </div>
  );
}

export default UserGenerator;
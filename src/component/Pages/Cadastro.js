import ButtonSubmit from "../Form/Button.js";
import InputBlock from "../Form/Input.js";
import styles from "../Styles/Cadastro.module.css";
import Lista from "../Form/Lista.js";
import React, { useState, useEffect } from "react";
import api from "../Services/api.js";
import Navbar from '../Layouts/Navbar.js';

function Cadastro() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setFone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cpf, setCpf] = useState('');

  const [todosDados, setTodosDados] = useState([])

  useEffect(() => {
    async function pegarDados() {
      const response = await api.get('/dados',);
      setTodosDados(response.data)
    }
    pegarDados();
  }, [])

  async function handleSubmit(e) {
    e.preventDefault();
     
    const response = await api.post('/dados', {
      nome, 
      email, 
      telefone, 
      endereco, 
      cpf
    })

    setNome('')
    setEmail('')
    setFone('')
    setEndereco('')
    setCpf('')

    setTodosDados([...todosDados, response.data])
  }

  async function handleDelete(id) {
      await api.delete(`/dados/${id}`)

      const updatedList = todosDados.filter(data => data.id !== id)
      setTodosDados(updatedList)
  }

  async function handleUpdate(id, nome, email, telefone, endereco, cpf) {
    const response = await api.put(`/dados/${id}`, {
      nome, 
      email, 
      telefone, 
      endereco, 
      cpf,
    });

    if (response.status === 200) {
      const updatedList = todosDados.map(data => {
        if (data._id === id) {
          return {
            _id: id,
            nome,
            email,
            telefone,
            endereco,
            cpf
          }
        } else {
          return data;
        }
      });
      setTodosDados(updatedList);
    } else {
      alert('Não foi possivel editar!')
    }
  }

  useEffect(() => {
    function ativarBotao() {
      let btn = document.getElementById('btn');
      btn.style.background = '#FFD3CA';
      if(nome && email && telefone && endereco && cpf) {
        btn.style.background = '#EB8F7A';
      }
    }
    ativarBotao();
  }, [nome, email, telefone, endereco, cpf])

  return (
    <div className={styles.app}>
      <Navbar/>
      <aside>
        <div className={styles.modal}>
          <strong>Cadastro</strong>
            <form onSubmit={handleSubmit}>
              <InputBlock label="Nome" htmlfor={'nameLabel'} type={'text'} value={nome} onChange={(e => setNome(e.target.value))}/>
              <InputBlock label="Email" htmlfor={'emailLabel'} type={'text'} value={email} onChange={(e => setEmail(e.target.value))}/>
              <InputBlock label="Telefone" htmlfor={'telefoneLabel'} type={'tel'} value={telefone} onChange={(e => setFone(e.target.value))}/>
              <InputBlock label="Endereço" htmlfor={'enderecoLabel'} type={'text'} value={endereco} onChange={(e => setEndereco(e.target.value))}/>
              <InputBlock label="CPF" htmlfor={'cpfLabel'} type={'number'} value={cpf} onChange={(e => setCpf(e.target.value))}/>
              <ButtonSubmit type={'submit'} value={'Cadastrar'} id={'btn'} className={styles.botaoCadastrar}/>
            </form>
        </div>
      </aside>
      
      <main>
        <ul>
          {todosDados.map(data => (
            <Lista key={data._id} data={data} handleDelete={() => handleDelete(data._id)} handleUpdate={handleUpdate}/>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default Cadastro;
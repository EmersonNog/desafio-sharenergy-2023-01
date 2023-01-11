import React, { useState, useEffect } from "react";
import styles from "../Styles/Cadastro.module.css";
import InputBlock from "../Form/Input.js";
import ButtonSubmit from "../Form/Button.js";

function Lista({ data, handleDelete, handleUpdate }) {
    
    const [deletado, setDeletado] = useState(false);

    const [editing, setEditing] = useState(false);
    const [nome, setNome] = useState(data.nome);
    const [email, setEmail] = useState(data.email);
    const [telefone, setTelefone] = useState(data.telefone);
    const [endereco, setEndereco] = useState(data.endereco);
    const [cpf, setCpf] = useState(data.cpf);

    async function handleClick() {
        await handleDelete(data.id);
        setDeletado(true);
    }

    async function handleSave(e) {
        e.preventDefault();
        await handleUpdate(data._id, nome, email, telefone, endereco, cpf);
        setEditing(false);
    }

    useEffect(() => {
        function ativarBotaoEditar() {
            let btnEditar = document.getElementById('btnEditar');
            if (btnEditar) {
              if(nome && email && telefone && endereco && cpf) {
                btnEditar.style.background = '#EB8F7A';
              }
            }
        }
        ativarBotaoEditar();
      }, [nome, email, telefone, endereco, cpf])

    if (deletado) {
        return null;
    }  
    
    return(
        <>
            {editing ? (
                <li className={styles.perfil} key={data._id}>
                    <form onSubmit={handleSave} className={styles.formEdicao}>
                        <h3>Edição</h3>
                        <br/>
                        <InputBlock label="Nome" htmlfor={'nameLabel'} type={'text'} value={nome} onChange={(e => setNome(e.target.value))} />
                        <InputBlock label="Email" htmlfor={'emailLabel'} type={'text'} value={email} onChange={(e => setEmail(e.target.value))} />
                        <InputBlock label="Telefone" htmlfor={'telefoneLabel'} type={'text'} value={telefone} onChange={(e => setTelefone(e.target.value))} />
                        <InputBlock label="Endereço" htmlfor={'enderecoLabel'} type={'text'} value={endereco} onChange={(e => setEndereco(e.target.value))} />
                        <InputBlock label="CPF" htmlfor={'cpfLabel'} type={'text'} value={cpf} onChange={(e => setCpf(e.target.value))} />
                        <ButtonSubmit type={'submit'} value={'Atualizar'} id={'btnEditar'}/>
                    </form>
                </li>
            ) : (
                <li className={styles.perfil} key={data._id}>
                    <div>
                        <strong>Perfil</strong>
                    </div>

                    <p>Nome: {data.nome}</p>
                    <p>Email: {data.email}</p>
                    <p>Telefone: {data.telefone}</p>
                    <p>Endereço: {data.endereco}</p>
                    <p>CPF: {data.cpf}</p>

                    <div className={styles.btn_action}>
                        <button className={styles.btn_remove} onClick={handleClick}>Remover</button>
                        <button className={styles.btn_edit} onClick={() => setEditing(true)}>Editar</button>
                    </div>

                </li>
            )}
        </>
    )
}

export default Lista;
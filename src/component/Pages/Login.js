import React, { useState } from 'react';
import { useEffect } from 'react';
import styles from '../Styles/Login.module.css';
import sharEnergy from '../../assets/simbolEnergy.jpg';

function Login() {
  // Crie um estado para armazenar o valor dos inputs de login e senha
  const [formData, setFormData] = useState({
    login: '',
    password: '',
    rememberMe: false,
  });

  // Crie uma função para atualizar o estado quando os valores dos inputs mudarem
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Crie uma função para ser chamada quando o formulário for enviado
  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.rememberMe) {
      localStorage.setItem('login', formData.login);
      localStorage.setItem('password', formData.password);
    }

    // Aqui você pode adicionar a lógica de autenticação, como verificar se o login e senha estão corretos e redirecionar o usuário para a página inicial
    if(formData.login === 'desafiosharenergy' && formData.password === 'sh@r3n3rgy') {
        window.location.replace('/UserGenerator')

    } else {
      alert('Login ou senha inválidos.')
    }
  };

  useEffect(() => {
    const login = localStorage.getItem('login');
    const password = localStorage.getItem('password');
    if (login && password) {
      setFormData({
        login,
        password,
        rememberMe: true,
      });
    }
  }, []);

  return (
    <section className={styles.sec1}>
      <div className={styles.container}>
        <div className={styles.apresentation}>
          <div className={styles.content}>
            <img src={sharEnergy} alt="logo sharenergy"></img>
            <h1>Bem-vindo a Sharenergy!</h1>
            <p>
              Desenvolvemos soluções que contribuem com o crescimento das <span>energias renováveis</span> no Brasil e no mundo.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <h1>Entre</h1>

          <form onSubmit={handleSubmit}>
            <label className={styles.labelCard}>
              Login:
            </label>
              <input type="text" placeholder='Insira seu login' name="login" value={formData.login} onChange={handleInputChange} />
            <br />

            <label className={styles.labelCard}>
                Senha:
            </label>
              <input type="password" placeholder='Insira sua senha' name="password" value={formData.password} onChange={handleInputChange} />
            <br />

              <button type="submit">Entrar</button>
            <br />

            <label className={styles.rememberMe}>
                Lembrar senha
                <input type="checkbox" name="rememberMe" value={formData.rememberMe} onChange={handleInputChange} />
            </label>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login;

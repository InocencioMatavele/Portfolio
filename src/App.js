// App.js
import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import { FaMobile, FaEnvelope, FaLinkedin, FaInstagram } from 'react-icons/fa';

function App() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedCertification, setSelectedCertification] = useState(null);
  const [activeTab, setActiveTab] = useState('sobreMim'); // Adicione estado para controlar a aba ativa

  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        hidePopup();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const showPopup = (certification) => {
    setSelectedCertification(certification);
    setPopupVisible(true);
  };

  const hidePopup = () => {
    setSelectedCertification(null);
    setPopupVisible(false);
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="portfolio">
      <header>
        <img
          src="\img\foto.jpg" // Substitua pelo nome real da sua imagem
          alt="Minha Foto"
          className="profile-picture"
        />
        <h1>Inocêncio Matavele</h1>
        <p>
         
        </p>
      </header>

      <section className="tabs">
        <div
          className={`tab ${activeTab === 'sobreMim' && 'active'}`}
          onClick={() => handleTabClick('sobreMim')}
          >
          Sobre Mim
        </div>
        <div
          className={`tab ${activeTab === 'certificacoes' && 'active'}`}
          onClick={() => handleTabClick('certificacoes')}
        >
          Certificações
        </div>
        <div
          className={`tab ${activeTab === 'projetos' && 'active'}`}
          onClick={() => handleTabClick('projetos')}
        >
          Projetos
        </div>
      </section>

      {/* Conteúdo das abas */}
      <section className="tab-content">
      {activeTab === 'sobreMim' && (
          <div>
            <h2>Sobre Mim</h2>
            <div className="section">
              <img
                src="\img\foto.jpg" // Substitua pelo nome real da sua imagem
                alt="Descrição"
                className="icon"
              />
              <div className="content">
              <p>Inocencio Matavele é um profissional apaixonado pela Engenharia Informática, com uma formação sólida e um conhecimento abrangente na área. Sua experiência inclui habilidades em full stack development e a capacidade de programar em diversas linguagens de programação.</p>

<p>Inocencio destaca-se pelo seu domínio no sistema operativo Windows, demonstrando proficiência na gestão e operação desse ambiente.</p>

<p>Além disso, sua capacidade de assimilar e dominar ferramentas tecnológicas com facilidade destaca-o como um profissional versátil e adaptável. Essa habilidade é crucial no cenário dinâmico da tecnologia, onde a rápida evolução e a introdução constante de novas ferramentas exigem profissionais capazes de se adaptar rapidamente.</p>

<p>Inocencio Matavele, com sua formação e experiência, contribui de maneira significativa para o campo da Engenharia Informática, trazendo consigo não apenas conhecimento técnico, mas também uma paixão evidente por explorar e aprimorar suas habilidades na área.</p>

              </div>
            </div>
            <div className="section">
              <img
                src="./experiencia-icon.png" // Substitua pelo nome real da sua imagem
                alt="Experiência Acadêmica"
                className="icon"
              />
              <div className="content">
                <p>Sua experiência acadêmica aqui...</p>
              </div>
            </div>
            <div className="section">
              <img
                src="./educacao-icon.png" // Substitua pelo nome real da sua imagem
                alt="Educação"
                className="icon"
              />
              <div className="content">
                <p>Sua educação aqui...</p>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'certificacoes' && (
          <div>
            <h2>Certificações</h2>
            {/* Conteúdo das certificações */}
          </div>
        )}
        {activeTab === 'projetos' && (
          <div>
            <h2>Projetos</h2>
            {/* Conteúdo dos projetos */}
          </div>
        )}
      </section>

      <section className="contact">
        {/* ... restante do código ... */}
      </section>

      <section className="certifications">
        {/* ... restante do código ... */}
      </section>

      {/* Pop-up para mostrar a descrição */}
      {popupVisible && (
        <div className="popup" ref={popupRef}>
          <div className="popup-content">
            <span className="close" onClick={hidePopup}>
              &times;
            </span>
            <h2>{selectedCertification}</h2>
            <p>Descrição detalhada da certificação {selectedCertification}. Link: [Inserir Link]</p>
          </div>
        </div>
      )}

      {/* ... restante do código ... */}
    </div>
  );
}

export default App;

import * as React from 'react';
import { ContainerHome, LinksHome } from '../home/stylesHome';
import i from '../../assets/1691085751995.jpeg';
import { FaDev, FaGithubSquare } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';

const Home = (): React.ReactElement => {
  const sentences = [
    ' Costumo construir frontend com ReactJS + TS e especialmente construir backend usando NestJS, NodeJS e Express.',
    ' Costumo construir aplicações mobile com React Native para criar experiências dinâmicas em dispositivos móveis. Utilizando Kotlin para desenvolvimento nativo de Android.',
    ' Tenho experiência em desenvolvimento para IoT, usando a Linguagem C para criar soluções conectadas e em tempo real.',
  ];

  const [displayedText, setDisplayedText] = React.useState('');
  const [currentSentence, setCurrentSentence] = React.useState(0);

  React.useEffect(() => {
    const sentence = sentences[currentSentence];
    if (displayedText !== sentence) {
      const timer = setTimeout(() => {
        setDisplayedText(sentence.slice(0, displayedText.length + 1));
      }, 20); // Velocidade de digitação

      return () => clearTimeout(timer);
    } else if (currentSentence < sentences.length - 1) {
      setTimeout(() => {
        setCurrentSentence(currentSentence + 1);
        setDisplayedText('');
      }, 20000); // Tempo entre as frases
    } else {
      // Reiniciar para a primeira frase
      setTimeout(() => {
        setCurrentSentence(0);
        setDisplayedText('');
      }, 20000); // Tempo entre as frases
    }
  }, [displayedText, currentSentence]);

  const highlightedWords = /(React\s*(?:Native|JS\s*\+\s*TS)|Kotlin|Android|IoT|NestJS|Express|NodeJS|Linguagem\s*C)/g;

  const resultado = displayedText.replace(
    highlightedWords,
    '<span>$1</span>'
  );

  return (
    <ContainerHome>
      <div>
        <img src={i} alt="i.jpg" />
        <h1>
          Olá, sou <span>Helyson Santiago</span> .
        </h1>
        <h3>Engenheiro de Software</h3>
        <p>
          Moro em São Paulo/SP-ZS, estou me formando em engenharia da computação.<span dangerouslySetInnerHTML={{ __html: resultado }} />
        </p>
        <LinksHome>
          <a href="https://dev.to/helysonsantiago" target='blank_'>
            <FaDev />
          </a>
          <a href="https://www.linkedin.com/in/helyson-santiago-844935233/" target='blank_'>
            <BsLinkedin />
          </a>
          <a href="https://github.com/helysonsantiago" target='blank_'>
            <FaGithubSquare />
          </a>
        </LinksHome>
      </div>
    </ContainerHome>
  );
};

export default Home;

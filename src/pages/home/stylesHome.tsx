import styled from 'styled-components';
type propsHome = {};

export const ContainerHome = styled.div<propsHome>`
  font-family: 'Poppins', sans-serif;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  color: var(--text-green);
  background-color: mintcream;
  & div {
    width: 70%;
    height: 90%;
    display: inherit;
    flex-direction: inherit;
    align-items: inherit;
    border-radius: 20px;

    @media (max-width: 900px) {
      width: 100%;
      height: 100vmax;
    }
  }
  & h1 {
    font-size: 62px;
    & span {
      color: var(--primary-color);
    }

    @media (max-width: 900px) {
      font-size: 40px;
      margin-top: 20px;
    }
  }
  & h3 {
    font-size: 35px;
    margin-top: 20px;

    @media (max-width: 900px) {
      font-size: 23px;
    }
  }
  & p {
    margin-top: 20px;
    font-size: 15px;
    min-height: 25%;
    max-height: 20%;
    line-height: 36px;
    width: 74%;
    &  span span {
      background-color: #00ffea3b;
      padding: 3px;
      border-radius: 10px;
      font-weight: 600;
    }
    @media (max-width: 900px) {
      font-size: 13px;
      width: 90%;
      line-height: 26px;
    }
  }
  & img {
    border-radius: 50%;
    height: 180px;
    width: 180px;
    animation: anim 6s linear infinite alternate;

    @keyframes anim {
      0% {
        transform: translateY(10px);
      }
      20% {
        transform: translateX(4px);
      }
      40% {
        transform: translateX(-4px);
      }
      60% {
        transform: translateX(-6px);
      }
      100% {
        transform: translatey(5);
      }
    }
    @media (max-width: 500px) {
      height: 150px;
      width: 150px;
    }
  }

  @media (max-width: 900px) {
    height: 150vh;
  }
  @media (max-width: 320px) {
    height: 170vh;
  }
`;

export const LinksHome = styled.span<propsHome>`
  min-height: 90px;
  width: 447px;
  border-radius: 100px;
  background-color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 40px;

  & a {
    color: mintcream;
    display: inherit;
    align-items: inherit;
  }
  & a:hover {
    filter: drop-shadow(0 0 15px darkcyan);
  }

  & a:hover svg {
    filter: drop-shadow(0 0 10px cyan);
  }
  @media (max-width: 900px) {
   
    min-height: 70px;
    width: 90%;
    font-size: 35px;
  }

  @media (max-width: 320px) {
   margin-top: 70px;
 }
`;

import styled from "styled-components";

const Trusted = () => {
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h3>Trusted By 1000+ Companies</h3>
        <div className="brand-section-slider">
          {/* my 1st img  */}
          <div className="slide">
            <img
              src="https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDgxNzN8MHwxfHNlYXJjaHwxfHxhbWF6b258ZW58MHx8fHwxNjk1ODEzNTA4fDA&ixlib=rb-4.0.3&q=80&w=400"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://images.unsplash.com/photo-1654573817889-296cad084c97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDgxNzN8MHwxfHNlYXJjaHwxfHxmbGlwa2FydHxlbnwwfHx8fDE2OTU4MTM0MTl8MA&ixlib=rb-4.0.3&q=80&w=400"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://images.unsplash.com/photo-1629458369744-1976229ada3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDgxNzN8MHwxfHNlYXJjaHwxfHxkaGx8ZW58MHx8fHwxNjk1ODE0MDA0fDA&ixlib=rb-4.0.3&q=80&w=400"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://images.unsplash.com/photo-1601172449745-ec49ac55ae13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDgxNzN8MHwxfHNlYXJjaHwxfHxmZWRleHxlbnwwfHx8fDE2OTU4MTQyODh8MA&ixlib=rb-4.0.3&q=80&w=400"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://images.unsplash.com/photo-1648091855459-5f41adebbc77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDgxNzN8MHwxfHNlYXJjaHwxfHxpbnN0YWNhcnR8ZW58MHx8fHwxNjk1ODE0NDU4fDA&ixlib=rb-4.0.3&q=80&w=400"
              alt="trusted-brands"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;

export default Trusted;

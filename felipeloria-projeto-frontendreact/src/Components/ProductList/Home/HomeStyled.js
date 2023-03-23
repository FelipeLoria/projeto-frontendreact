import styled from "styled-components";

export const HomeContainer = styled.main`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 20fr;
    align-items: start;
    justify-items: start;
    width: 60vw;
    height: 200vh;
    border: 1px solid white;
    gap: 2vh
`

export const Title = styled.p`
    grid-column: 1/2;
    grid-row: 1/2;
    color: white;
`

export const Ordenação = styled.div`
    grid-column: 3/4;
    grid-row: 1/2;
    color: white;    
    display: flex;
    color: white;
`
export const Cards = styled.div`
    grid-column: 1/4;
    grid-row: 2/3;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-items: start;
    gap: 2vw;
    padding: 0 2vw;
`
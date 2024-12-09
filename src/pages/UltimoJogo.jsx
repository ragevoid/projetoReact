import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import TeamInfo from '../components/TeamInfo.jsx';
import { fetchLastFixture } from '../api.jsx';
import LastFixtureDisplay from '../components/LastFixture.jsx';


const UltimoJogo = () => {
    const [lastFixture, setLastFixture] = useState(null);


    // Efeito para carregar os dados quando o componente for montado
    useEffect(() => {
        const loadData = async () => {
            const lastFixtureData = await fetchLastFixture();
            setLastFixture(lastFixtureData);
        };
        loadData();
    }, []);

    return (
        <Container>
            <TeamInfo />

            <LastFixtureDisplay lastFixture={lastFixture} />
        </Container>
    );
};

export default UltimoJogo;


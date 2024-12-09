import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import TeamInfo from '../components/TeamInfo';
import TeamStory from '../components/TeamStory';


const Story = () => {

  return (
    <Container className='p-5 gap-3' >
       <TeamInfo/>
       <TeamStory />
    </Container>
  );
};

export default Story;


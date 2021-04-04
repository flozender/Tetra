import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import fetchApi from '../services/fetch-custom';
import { Heading, Flex, Text, Image, Button } from '@chakra-ui/react';
import items from './items';
import recycleBackground from '../assets/img/recyclebk.png'

import '../assets/scroll.css';
import '../assets/overall.css';

const Recycle = props => {
  const [state, setState] = useState({
    recycleItems: items,
  });
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleClick = () => setShow(!show);
  const { recycleItems } = state;
  return (
    <Flex justifyContent="center" alignItems="center">
      <img src={recycleBackground}/>
      <Flex
        textAlign="center"
        fontSize="md"
        p={6}
        bgColor="gray.900"
        borderRadius="md"
        flexDirection="column"
        justifyContent="space-between"
        width="85%"
        alignItems="center"
        className='box-container arrange-to-top' 
      >
        <Flex
          width="100%"
          alignItems="center"
          justifyContent="center"
          marginBottom={4}
          
          
        >
          <Flex width="100%" justifyContent="center" >
          <Heading padding={2} className="title-bk" fontSize="2xl" >
            Items Up For Recycling
          </Heading>
          </Flex>
          <Button  className='green-btn' size="md" alignSelf="flex-end" colorScheme="cyan">
            Dashboard
          </Button>
        </Flex>
        <Flex
          width="100%"
          flexWrap="wrap"
          alignItems="center"
          display="inline-flex"
          style={{ gap: '30px' }}
          height="73vh"
          overflow="auto"
        >
          {recycleItems.map((e, i) => (
            <Card key={i} {...e} />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

const Card = ({ ssn, name, url, deadline }) => {
  return (
    <Flex  bg="gray.700" p={4} flexDirection="column" width="30%" rounded="md">
      <Image height={220} src={url} alt={name} />
      <Flex width="100%" textAlign="start" marginTop={4} flexDirection="column">
        <Heading as="h5" size="sm" color="gray.400">
          {ssn}
        </Heading>
        <Flex
          width="100%"
          justifyContent="space-between"
          alignItems="baseline"
          my={2}
        >
          <Heading isTruncated as="h3" size="lg">
            {name}
          </Heading>
          <Heading as="h5" size="md">
            {deadline}
          </Heading>
        </Flex>
        <Button className='yellow-btn' colorScheme="green" width="60%" alignSelf="center" mt={2}>
          RECYCLE
        </Button>
      </Flex>
    </Flex>
  );
};
export default withRouter(Recycle);

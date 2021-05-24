// import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import AssistantListResults from 'src/components/assistant/AssistantListResults';
import AssistantListToolbar from 'src/components/assistant/AssistantListToolbar';
import assistants from 'src/__mocks__/customers';
// const url = "http://localhost:4000/register";

const AssistantList = () => (
  // const [registerData, setRegisterData ] = useState({});
  // useEffect(()=>{assistants();},[]);
  // const assistants = async()=>{};
  <>
    <Helmet>
      <title>Assistants | Ntuma Admin</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <AssistantListToolbar />
        <Box sx={{ pt: 3 }}>
          <AssistantListResults assistants={assistants} />
        </Box>
      </Container>
    </Box>
  </>
);

export default AssistantList;

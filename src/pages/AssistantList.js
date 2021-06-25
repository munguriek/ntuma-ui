import { Helmet } from "react-helmet";
import { Box, Container } from "@material-ui/core";
import AssistantListResults from "src/components/assistant/AssistantListResults";
import AssistantListToolbar from "src/components/assistant/AssistantListToolbar";
// import assistants from 'src/__mocks__/assistants';

const AssistantList = () => (
  <>
    <Helmet>
      <title>Assistants | Ntuma Admin</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100%",
        py: 3,
      }}
    >
      <Container maxWidth={false}>
        <AssistantListToolbar />

        <Box sx={{ pt: 3 }}>
          <AssistantListResults />
        </Box>
      </Container>
    </Box>
  </>
);

export default AssistantList;

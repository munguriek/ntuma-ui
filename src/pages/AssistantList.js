import { Helmet } from "react-helmet";
import {
  Box,
  Container,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Switch,
} from "@material-ui/core";
import AssistantListResults from "src/components/assistant/AssistantListResults";
import AssistantListToolbar from "src/components/assistant/AssistantListToolbar";
// import assistants from 'src/__mocks__/assistants';
import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";
import PropTypes from "prop-types";
import EditAssistant from "src/components/assistant/EditAssistantModal";

const AssistantList = (assistant, ...rest) => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const handleLimitChange = (event) => {
    setLimit(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:1200/assistants").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  // calculations for the empty rows
  const emptyRows = limit - Math.min(limit, data.length - page * limit);

  return (
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

          <Box sx={{ minWidth: 1050 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell> Photo </TableCell>
                  <TableCell> Name </TableCell>

                  <TableCell> Market </TableCell>
                  <TableCell> Phone </TableCell>
                  <TableCell> Registration date </TableCell>
                  <TableCell> Edit Assistant </TableCell>
                  <TableCell> Deactivate </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {data
                  .slice(page * limit, page * limit + limit)
                  .map((assistant, index) => (
                    <TableRow hover key={assistant.id}>
                      <TableCell>
                        <img
                          src={assistant.profile_pic}
                          alt={assistant.firstName}
                          class="cover"
                          width="200px"
                          height="100px"
                        />
                      </TableCell>
                      <TableCell>
                        {assistant.firstName}
                        {assistant.surName}
                      </TableCell>

                      <TableCell>{assistant.address}</TableCell>
                      <TableCell>{assistant.phone}</TableCell>
                      <TableCell>
                        {moment(assistant.createdAt).format("DD/MM/YYYY")}
                      </TableCell>
                      <TableCell>
                        <EditAssistant />
                      </TableCell>
                      <TableCell>
                        <Switch
                          inputProps={{ "aria-label": "primary checkbox" }}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                {/* this is basically to create empty rows in the last page incase the number of rows are less than the limit and is good for ui */}
                {emptyRows > 0 && (
                  // so the emtpy rows take up the no. of rows emy times the pexels of the height = 53px
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </Box>

          <TablePagination
            component="div"
            count={assistant.length}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleLimitChange}
            page={page}
            rowsPerPage={limit}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </Container>
      </Box>
    </>
  );
};

AssistantListResults.propTypes = {
  assistants: PropTypes.array.isRequired,
};

export default AssistantList;

// <Box sx={{ pt: 3 }}>

//               <AssistantListResults assistants={assistants} />

//           </Box>

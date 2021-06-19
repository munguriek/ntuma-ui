import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Switch,
} from "@material-ui/core";
// import getInitials from "src/utils/getInitials";
import axios from "axios";
import EditAssistant from "src/components/assistant/EditAssistantModal";

const AssistantListResults = ({ assistants, ...rest }) => {
  // const [selectedAssistantIds, setSelectedAssistantIds] = useState([]);
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

  // const handleSelectAll = (event) => {
  //   let newSelectedAssistantIds;

  //   if (event.target.checked) {
  //     newSelectedAssistantIds = assistants.map((assistant) => assistant.id);
  //   } else {
  //     newSelectedAssistantIds = [];
  //   }

  //   setSelectedAssistantIds(newSelectedAssistantIds);
  // };

  // const handleSelectOne = (event, id) => {
  //   const selectedIndex = selectedAssistantIds.indexOf(id);
  //   let newSelectedAssistantIds = [];

  //   if (selectedIndex === -1) {
  //     newSelectedAssistantIds = newSelectedAssistantIds.concat(selectedAssistantIds, id);
  //   } else if (selectedIndex === 0) {
  //     newSelectedAssistantIds = newSelectedAssistantIds.concat(selectedAssistantIds.slice(1));
  //   } else if (selectedIndex === selectedAssistantIds.length - 1) {
  //     newSelectedAssistantIds = newSelectedAssistantIds.concat(selectedAssistantIds.slice(0, -1));
  //   } else if (selectedIndex > 0) {
  //     newSelectedAssistantIds = newSelectedAssistantIds.concat(
  //       selectedAssistantIds.slice(0, selectedIndex),
  //       selectedAssistantIds.slice(selectedIndex + 1)
  //     );
  //   }

  //   setSelectedAssistantIds(newSelectedAssistantIds);
  // };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                {/* <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedAssistantIds.length === assistants.length}
                    color="primary"
                    indeterminate={
                      selectedAssistantIds.length > 0 &&
                      selectedAssistantIds.length < assistants.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell> */}
                <TableCell> Photo </TableCell>
                <TableCell> Name </TableCell>
                {/* <TableCell> Email </TableCell> */}
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
                .map((assistants, index) => (
                  <TableRow
                    hover
                    key={assistants.id}
                    // selected={selectedAssistantIds.indexOf(assistant.id) !== -1}
                  >
                    {/* <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedAssistantIds.indexOf(assistant.id) !== -1}
                      onChange={(event) => handleSelectOne(event, assistant.id)}
                      value="true"
                    />
                  </TableCell> */}
                    <TableCell>
                      <img
                        src={assistants.profile_pic}
                        alt={assistants.firstName}
                        class="cover"
                        width="200px"
                        height="100px"
                      />
                    </TableCell>
                    <TableCell>
                      {assistants.firstName}
                      {assistants.surName}
                    </TableCell>
                    {/* <TableCell>
                    {assistant.email}
                  </TableCell> */}
                    <TableCell>{assistants.address}</TableCell>
                    <TableCell>{assistants.phone}</TableCell>
                    <TableCell>
                      {moment(assistants.createdAt).format("DD/MM/YYYY")}
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
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={assistants.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

AssistantListResults.propTypes = {
  assistants: PropTypes.array.isRequired,
};

export default AssistantListResults;

// import { useState, useEffect } from "react";
// // import PropTypes from "prop-types";
// import moment from "moment";
// import PerfectScrollbar from "react-perfect-scrollbar";
// import {
//   Box,
//   Button,
//   Card,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TablePagination,
//   TableRow,
//   Switch,
// } from "@material-ui/core";
// // import getInitials from "src/utils/getInitials";
// import axios from "axios";
// import EditAssistant from "src/components/assistant/EditAssistantModal";

// const AssistantListResults = ({ assistant, ...rest }) => {
//   // const [limit, setLimit] = useState(10);
// const [page, setPage] = useState(1);

// const handleLimitChange = (event) => {
//   setLimit(parseInt(event.target.value, 10));
//   setPage(0);
// };

// const handlePageChange = (event, newPage) => {
//   setPage(newPage);
// };

// const [data, setData] = useState([]);

// useEffect(() => {
//   axios.get("http://localhost:1200/assistants").then((res) => {
//     setData((res) => {
//       for (let assistant in res.data) {
//         data = data.push(assistant);
//       }
//       return data;
//     });
//     console.log(data);
//   });
//   // set sth to control this hook
// }, []);

// // // calculations for the empty rows
// // const emptyRows = limit - Math.min(limit, data.length - page * limit);

// return (
//   // <Card {...rest}>
//   <PerfectScrollbar>
//     <Box sx={{ minWidth: 1050 }}>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell> Photo </TableCell>
//             <TableCell> Name </TableCell>
//             {/* <TableCell> Email </TableCell> */}
//             <TableCell> Market </TableCell>
//             <TableCell> Phone </TableCell>
//             <TableCell> Registration date </TableCell>
//             <TableCell> Edit Assistant </TableCell>
//             <TableCell> Deactivate </TableCell>
//           </TableRow>
//         </TableHead>

//         <TableBody>
//           {data
//             .slice(page * limit, page * limit + limit)
//             .map((assistant) => (
//               <TableRow hover key={assistant.phone}>
//                 <TableCell>
//                   <img
//                     src={assistant.profile_pic}
//                     alt={assistant.firstName}
//                     class="cover"
//                     width="200px"
//                     height="100px"
//                   />
//                 </TableCell>
//                 <TableCell>
//                   {assistant.firstName}
//                   {assistant.surName}
//                 </TableCell>
//                 {/* <TableCell>
//                 {assistant.email}
//               </TableCell> */}
//                 <TableCell>{assistant.address}</TableCell>
//                 <TableCell>{assistant.phone}</TableCell>
//                 <TableCell>
//                   {moment(assistant.createdAt).format("DD/MM/YYYY")}
//                 </TableCell>
//                 <TableCell>
//                   <EditAssistant />
//                 </TableCell>
//                 <TableCell>
//                   <Switch
//                     inputProps={{ "aria-label": "primary checkbox" }}
//                   />
//                 </TableCell>
//               </TableRow>
//             ))}
//           {/* this is basically to create empty rows in the last page incase the number of rows are less than the limit and is good for ui */}
//           {emptyRows > 0 && (
//             // so the emtpy rows take up the no. of rows emy times the pexels of the height = 53px
//             <TableRow style={{ height: 53 * emptyRows }}>
//               <TableCell colSpan={6} />
//             </TableRow>
//           )}
//           {/* <Button
//             onClick={() => {
//               axios.get("http://localhost:1200/assistants").then((res) => {
//                 setData((res) => {
//                   for (let assistant in res.data) {
//                     data = data.push(assistant);
//                   }
//                   return data;
//                 });
//                 console.log(res.data);
//               });
//             }}
//           >
//             CLICK ME
//           </Button> */}
//         </TableBody>
//       </Table>
//     </Box>
//   </PerfectScrollbar>
//   <TablePagination
//     component="div"
//     count={data.length}
//     onPageChange={handlePageChange}
//     onRowsPerPageChange={handleLimitChange}
//     page={page}
//     rowsPerPage={limit}
//     rowsPerPageOptions={[5, 10, 25]}
//   />
//     // </Card>
//   );
// };

// AssistantListResults.propTypes = {
//   assistant: PropTypes.array.isRequired,
// };

// export default AssistantListResults;

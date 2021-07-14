// import PropTypes from "prop-types";
// import Modal from "react-bootstrap/Modal";
// import ModalHeader from "react-bootstrap/ModalHeader";
// import ModalTitle from "react-bootstrap/ModalTitle";
// import ModalBody from "react-bootstrap/ModalBody";
// import {
//   Box,
//   Card,
//   CardContent,
//   Divider,
//   Grid,
//   Typography,
//   Button,
// } from "@material-ui/core";
// import { useNavigate } from "react-router-dom";

// const AssistantsCard = ({ assistant, ...rest }) => {
//   // const [show, setShow] = useState(false);
//   // const handleClose = () => setShow(false);
//   // const handleShow = () => setShow(true);

//   const navigate = useNavigate();

//   return (
//     <Card
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         height: "100%",
//       }}
//       {...rest}
//     >
//       <CardContent>
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             pb: 3,
//           }}
//         >
//           <img
//             src={assistant.profile_pic}
//             alt={assistant.firstName}
//             class="cover"
//             width="200px"
//             height="100px"
//           />
//         </Box>
//         <Typography
//           align="center"
//           color="textPrimary"
//           gutterBottom
//           variant="h4"
//         >
//           {assistant.firstName}
//         </Typography>
//         <Typography align="center" color="textPrimary" variant="body1">
//           {assistant.}
//         </Typography>
//         <Typography align="center" color="textPrimary" variant="body1">
//           {market.market_location}
//         </Typography>
//         <Typography align="center" color="textPrimary" variant="body1">
//           {market.market_location}
//         </Typography>
//         <Typography align="center" color="textPrimary" variant="body1">
//           {market.market_location}
//         </Typography>
//       </CardContent>
//       <Box sx={{ flexGrow: 1 }} />
//       <Divider />
//       <Box sx={{ p: 2 }}>
//         <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
//           <Grid
//             item
//             sx={{
//               alignItems: "center",
//               display: "flex",
//             }}
//           >
//             <Button
//               color="textSecondary"
//               display="inline"
//               sx={{ pl: 1 }}
//               variant="body2"
//               onClick={() => {
//                 navigate("/app/products");
//               }}
//             >
//               View Products
//             </Button>
//           </Grid>
//           <Grid
//             item
//             sx={{
//               alignItems: "center",
//               display: "flex",
//             }}
//           >
//             <Button
//               color="textSecondary"
//               display="inline"
//               sx={{ pl: 1 }}
//               variant="body2"
//               // onClick={setShow(true)}
//               onClick={() => deleteMarket(market._id)}
//             >
//               Delete
//             </Button>
//             <Modal
//               size="lg"
//               aria-labelledby="contained-modal-title-vcenter"
//               centered
//               // show={show}
//               // onHide={setShow(false)}
//               backdrop="static"
//               keyboard={false}
//             >
//               <ModalHeader closeButton style={{ backgroundColor: "#FFF5E3" }}>
//                 <ModalTitle>Delete?</ModalTitle>
//               </ModalHeader>
//               <ModalBody>
//                 <p>Are you sure you want to delete this market?</p>
//                 {/* <Button onClick={() => setShow(false)}>No</Button>
//                 <Button onClick={() => deleteMarket(market._id)}>Yes</Button> */}
//               </ModalBody>
//             </Modal>
//           </Grid>
//         </Grid>
//       </Box>
//     </Card>
//   );
// };

// MarketCard.propTypes = {
//   markets: PropTypes.object.isRequired,
// };

// export default AssistantsCard;

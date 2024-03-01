// import React from 'react';
// import onLogo from "./of.png";
// import offLogo from "./on.png";

// // Functional component for the talk button
// const TalkButton = ({ isTalking, onMouseDown, onMouseUp, onTouchStart, onTouchEnd }) => (
//   <button
//     onMouseDown={onMouseDown}
//     onMouseUp={onMouseUp}
//     onTouchStart={onTouchStart}
//     onTouchEnd={onTouchEnd}
//     style={{
//       width: "500px",
//       height: "500px",
//       backgroundImage: `url(${isTalking ? offLogo : onLogo})`,
//       backgroundSize: "cover",
//       backgroundRepeat: "no-repeat",
//       color: "transparent",
//       borderRadius: "50%",
//       border: "none",
//       cursor: "pointer",
//       position: "relative",
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//       justifyContent: "center",
//       fontSize: "calc(10px + 2vmin)",
//       color: "white",
//       backgroundColor: "#282c34", // Add this line for background color
//       minHeight: "100vh", // Add this line for minimum height
//     }}
//   >
//     {isTalking && (
//       <div
//         style={{
//           position: "absolute",
//           width: "100%",
//           height: "100%",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <span
//           style={{
//             color: "white",
//             fontWeight: "bold",
//             borderRadius: "10px",
//             padding: "5px",
//             backgroundColor: "rgba(0, 0, 0, 0.5)",
//           }}
//         >
//           talking
//         </span>
//       </div>
//     )}
//   </button>
// );

// export default TalkButton;

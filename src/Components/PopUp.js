import React, { useContext, useState } from "react";
import {
  Modal,
  Box,
  Typography,
  IconButton,
  Fade,
  TextField,
  Divider,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { CardContext } from "../CardContext";

const PopUp = ({ open, onClose, title }) => {
  const { selectedCard } = useContext(CardContext);
  const [data] = useState(selectedCard || {});
  const [quantity, setQuantity] = useState(1);
  const [openSnak, setOpen] = useState(false);

  const handleSnackClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setQuantity(value >= 1 ? value : 1);
  };

  const subtotal = quantity * (data.afterPrice || 0);
  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            backgroundColor: "#FFFFFF",
            borderRadius: "8px",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            padding: "24px",
            width: "400px",
            maxWidth: "90%",
            position: "relative",
          }}
        >
          <IconButton
            onClick={onClose}
            sx={{
              position: "absolute",
              top: "8px",
              right: "8px",
              color: "#000000",
            }}
          >
            <CloseIcon />
          </IconButton>

          {title && (
            <Typography
              id="modal-title"
              variant="h6"
              component="h2"
              sx={{
                color: "#274C5B",
                fontFamily: "Roboto",
                fontSize: "40px",
                fontWeight: 800,
              }}
            >
              {title}
            </Typography>
          )}
          <Divider
            sx={{
              borderColor: "#274C5B",
              marginTop: "10px",
            }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {data.image ? (
                <img
                  src={data.image}
                  alt={data.name}
                  style={{
                    maxWidth: "80px",
                    borderRadius: "8px",
                  }}
                />
              ) : (
                <Typography variant="body1" color="textSecondary">
                  No Image Available
                </Typography>
              )}

              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "20px",
                    fontWeight: 700,
                    lineHeight: "23.44px",
                    textAlign: "left",
                    color: "#274C5B",
                  }}
                >
                  ${data.afterPrice ? `${data.afterPrice} USD` : "N/A"}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "20px",
                    fontWeight: 700,
                    lineHeight: "23.44px",
                    textAlign: "left",
                    color: "#274C5B",
                  }}
                >
                  {data.name ? `${data.name}` : "N/A"}
                </Typography>
              </Box>
            </Box>

            <TextField
              type="number"
              defaultValue={1}
              inputProps={{
                min: 1,
              }}
              onChange={handleQuantityChange}
              size="medium"
              sx={{
                width: "20%",
                fontSize: "1.2rem",
              }}
            />
          </Box>
          <Divider
            sx={{
              borderColor: "#274C5B",
              marginTop: "10px",
            }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Roboto",
                fontSize: "20px",
                fontWeight: 700,
                lineHeight: "23.44px",
                textAlign: "left",
                color: "#274C5B",
              }}
            >
              SubTotal
            </Typography>
            <Typography
              sx={{
                fontFamily: "Roboto",
                fontSize: "20px",
                fontWeight: 700,
                lineHeight: "23.44px",
                textAlign: "left",
                color: "#274C5B",
              }}
            >
              {subtotal}$
            </Typography>
          </Box>
          <Button
            onClick={handleSnackClick}
            variant="contained"
            sx={{
              width: "100%",
              fontFamily: "Roboto",
              fontSize: "20px",
              height: "50px",
              fontWeight: 700,
              lineHeight: "23.44px",
              textAlign: "left",
              backgroundColor: "#274C5B",
              marginTop: "10px",
              color: "white",
            }}
          >
            Add
          </Button>
          <Snackbar
            open={openSnak}
            autoHideDuration={3000}
            onClose={handleClose}
            TransitionComponent={Fade}
            anchorOrigin={{ vertical: "top", horizontal: "right" }} // Position of the toast
          >
            <Alert
              onClose={handleClose}
              severity="success"
              variant="filled"
              sx={{ width: "100%"}}
            >
              Added {data.name} to Cart
            </Alert>
          </Snackbar>
        </Box>
      </Fade>
    </Modal>
  );
};

export default PopUp;

import { DeleteRounded } from "@mui/icons-material";
import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import React from "react";
import { toast } from "react-toastify";

const ProductCard = ({ response, handleDelete }) => {
  return (
    <div>
      <Box
        key={response.id}
        border={"1px dashed"}
        display={"flex"}
        mb={2}
        justifyContent={"space-between"}
      >
        <Box display={"flex"}>
          <Box height={100} width={100}>
            <img
              src={response.image}
              alt="Service image"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                marginRight: 2,
              }}
            />
          </Box>
          <Divider orientation="vertical" />
          <Box mt={1} ml={2}>
            <Typography>
              <strong>{response.name}</strong>
            </Typography>
            <Typography color={"blue"}>{response.price}</Typography>
          </Box>
        </Box>
        <IconButton
          sx={{ mt: 5, ml: -1 }}
          onClick={() => handleDelete(response.id)}
        >
          <DeleteRounded sx={{ color: "red" }} />
        </IconButton>
      </Box>
    </div>
  );
};

export default ProductCard;

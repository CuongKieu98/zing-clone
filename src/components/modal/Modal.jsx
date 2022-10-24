import React, { useEffect, useState } from "react";
import "./modal.scss";

//dialog
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Button from "../button/Button";

const Modal = ({ onOpen, onClose, children, title }) => {
  const [theme, setTheme] = useState("");

  const dataTheme = "";

  useEffect(() => {
    setTheme(dataTheme);
  }, [dataTheme]);

  return (
    <div className="modal-dialog">
      <Dialog
        open={onOpen}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth={true}
        maxWidth="md"
        PaperProps={{
            sx: {
                overflowY: "hidden"
            }
          }}
      >
        <div
          data-theme={theme.color?.datatheme}
          className={"modal-dialog " + theme?.mode}
        >
          <div className="close-btn">
            <Button className={"no-bg"} onClick={onClose}>
              <CloseRoundedIcon
                sx={{ fontSize: 20, color: "var(--setting-icon-text)" }}
              />
            </Button>
          </div>
          <h3 className="title main-title">{title}</h3>
            <div className="container-modal">

          <DialogContent>
            <DialogContentText id="alert-dialog-description" component={"span"}>
              {children}
            </DialogContentText>
          </DialogContent>
            </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Modal;

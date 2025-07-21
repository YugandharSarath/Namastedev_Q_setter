import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  WhatsApp as WhatsAppIcon,
  Telegram as TelegramIcon,
  Email as EmailIcon,
  Reddit as RedditIcon,
  ContentCopy as CopyIcon,
} from "@mui/icons-material";

const SocialShare = () => {
  const shareUrl = "https://namaste.dev";
  const shareText = "Check this out!";

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      alert("Link copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "10px" }}>
      <h2
        style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "20px" }}
      >
        Share This Question Via
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
          justifyContent: "center",
        }}
      >
        <IconButton
          component="a"
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Share on LinkedIn"
        >
          <LinkedInIcon fontSize="large" color="primary" />
        </IconButton>

        <IconButton
          component="a"
          href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Share on X"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b7/X_logo.jpg"
            alt="X Logo"
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "6px",
              backgroundColor: "#000",
            }}
          />
        </IconButton>

        <IconButton
          component="a"
          href={`https://wa.me/?text=${encodeURIComponent(
            `${shareText} ${shareUrl}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Share on WhatsApp"
        >
          <WhatsAppIcon fontSize="large" sx={{ color: "#25D366" }} />
        </IconButton>

        <IconButton
          component="a"
          href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Share on Facebook"
        >
          <FacebookIcon fontSize="large" sx={{ color: "#3b5998" }} />
        </IconButton>

        <IconButton
          component="a"
          href={`https://t.me/share/url?url=${shareUrl}&text=${shareText}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Share on Telegram"
        >
          <TelegramIcon fontSize="large" sx={{ color: "#0088cc" }} />
        </IconButton>

        <IconButton
          component="a"
          href={`https://www.reddit.com/submit?url=${shareUrl}&title=${shareText}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Share on Reddit"
        >
          <RedditIcon fontSize="large" sx={{ color: "#FF4500" }} />
        </IconButton>

        <IconButton
          component="a"
          href={`mailto:?subject=${shareText}&body=${shareUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Share via Email"
        >
          <EmailIcon fontSize="large" color="action" />
        </IconButton>
      </div>

      <div style={{ marginTop: "30px" }}>
        <p style={{ marginBottom: "10px", fontWeight: "500" }}>Or copy link:</p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "10px",
            background: "#f1f1f1",
          }}
        >
          <span
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              maxWidth: "70%",
            }}
          >
            {shareUrl}
          </span>
          <Button
            onClick={copyLink}
            variant="contained"
            color="success"
            startIcon={<CopyIcon />}
          >
            Copy
          </Button>
        </div>
      </div>
    </div>
  );
};

const ShareDialogWrapper = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Share This
      </Button>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>
          Share This Page
          <IconButton
            onClick={() => setOpen(false)}
            style={{ position: "absolute", right: 8, top: 8 }}
            aria-label="Close"
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <SocialShare />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ShareDialogWrapper;

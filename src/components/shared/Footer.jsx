import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  const footerStyle = {
    marginTop: "auto",
    backgroundColor: "#1976d2",
    color: "#fff",
    padding: "16px 0",
  };

  const footerContentStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const socialIconsStyle = {
    display: "flex",
    gap: "8px",
  };

  return (
    <AppBar position="static" style={footerStyle}>
      <Container>
        <Toolbar style={footerContentStyle}>
          <div>
            <Typography variant="body1" component="p">
              &copy; {new Date().getFullYear()} Medical Camp Management System
            </Typography>
            <Typography variant="body2" component="p">
              Developed by Ismail
            </Typography>
            <Typography variant="body2" component="p">
              Contact:{" "}
              <Link href="tel:+123456789" style={{ color: "#fff" }}>
                123-456-789
              </Link>
            </Typography>
          </div>
          <div style={socialIconsStyle}>
            <IconButton aria-label="Facebook" color="inherit">
              <FacebookIcon />
            </IconButton>
            <IconButton aria-label="Twitter" color="inherit">
              <TwitterIcon />
            </IconButton>
            <IconButton aria-label="LinkedIn" color="inherit">
              <LinkedInIcon />
            </IconButton>
            <IconButton aria-label="Email" color="inherit">
              <EmailIcon />
            </IconButton>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;

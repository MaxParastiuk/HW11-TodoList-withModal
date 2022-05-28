import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
	return (
		<AppBar position='static' sx={{ backgroundColor: "#3d985d" }}>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<Typography
						variant='h6'
						noWrap
						component='a'
						href='/'
						sx={{
							mr: 2,
							display: { md: "flex" },
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}>
						TodoList
					</Typography>
					<Box sx={{ flexGrow: 0, ml: "auto" }}>
						<RouterLink to='/create' style={{ textDecoration: "none" }}>
							<Button
								variant='contained'
								sx={{
									backgroundColor: "#d7c51d",
									color: "white",
									fontWeight: "bold",
								}}>
								Add Todo
							</Button>
						</RouterLink>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default Header;

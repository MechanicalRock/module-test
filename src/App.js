import { ThemeProvider, Typography } from '@mui/material';
import theme from 'tim-veletta-theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Typography variant="h1" color="primary">
				This should be in the primary color #40bfb4
			</Typography>
			<Typography variant="h1" color="secondary">
				This should be in the secondary color #e15554
			</Typography>
		</ThemeProvider>
	);
}

export default App;

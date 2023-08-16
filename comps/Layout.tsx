import Navbar from './Navbar'
import Footer from './Footer'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

 
//加栏目content在里面
const sections = [
  { title: 'HOME', url: '/' },
  { title: 'about', url: '/about' },
  { title: 'testcase', url: '/testcase' },
  { title: 'data grid', url: '/datagrid' },
  { title: 'example1', url: '/#' },
];

const defaultTheme = createTheme();

interface LayoutProps {
    children: React.ReactNode;
  }


const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Navbar title="Xiao Demo" sections={sections} />
        <main>{children}</main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
};

export default Layout;

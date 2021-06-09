import { Layout } from 'antd';
import 'antd/dist/antd.css';

import Header from './Header';
import Sidebar from './Sidebar';

const PanelLayout = (props) => {
  const { Footer } = Layout;

  return (
    <Layout>
      <Header />
      <Layout
        style={{
          position: 'fixed',
          width: '100%',
          height: '90%',
          top: '5rem',
        }}>
        <Sidebar />
        <Layout style={{ backgroundColor: '#fff' }}>  
          {props.children}
          <Footer style={{  textAlign: 'center', padding: '10px',  }}>Copyright @ 2021 AIWinOps. All Rights Reserved</Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default PanelLayout;

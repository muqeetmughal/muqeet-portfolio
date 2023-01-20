import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Form from "../components/Form";
import {
  Box,
  BoxConainer,
  Container,
  Title,
  Table,
} from "../styles/pages/ContactStyles";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact - imsamimalik</title>
      </Helmet>
      <Container className="containerr">
        <BoxConainer className="container-fluid">
          <Title className="title">Contact Information</Title>
          <div className="row">
            <div className="col-lg-4 col-sm-12">
              <Box className="box">
                <Table className="table p-15-15">
                  <div>
                    <ul>
                      <li>
                        <strong>Residence:</strong> Mars
                      </li>
                      <li>
                        <strong>City:</strong> Jezero Crater
                      </li>
                      <li>
                        <strong>Streat:</strong> Syrtis quadrangle
                      </li>
                    </ul>
                  </div>
                </Table>
              </Box>
            </div>
            <div className="col-lg-4 col-sm-12">
              <Box className="box">
                <Table className="table p-15-15">
                  <div>
                    <ul>
                      <li>
                        <strong>Email:</strong> imsamimalikk@gmail.com
                      </li>
                      <li>
                        <strong>Github:</strong> imsamimalik
                      </li>
                      <li>
                        <strong>LinkedIn:</strong> imsamimalik
                      </li>
                    </ul>
                  </div>
                </Table>
              </Box>
            </div>
            <div className="col-lg-4 col-sm-12">
              <Box className="box">
                <Table className="table p-15-15">
                  <div>
                    <ul>
                      <li>
                        <strong>Fiverr:</strong> akhtarnadeem
                      </li>
                      <li>
                        <strong>Upwork:</strong> samimalik123
                      </li>
                      <li>
                        <strong>LinkedIn:</strong> imsamimalik
                      </li>
                    </ul>
                  </div>
                </Table>
              </Box>
            </div>
          </div>
        </BoxConainer>
        <BoxConainer className="container-fluid">
          <Title className="title">Get in touch</Title>
          <div className="row">
            <div className="col-lg-12">
              <Form />
            </div>
          </div>
        </BoxConainer>
        <Footer />
      </Container>
    </>
  );
};

export default Contact;

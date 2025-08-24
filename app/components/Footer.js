import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Footer.css'; // Don't forget to import the custom CSS file

export default function Footer() {
  return (
    <Container fluid className="footer-container">
      <footer className="bg-dark text-white py-5">
        <Container>
          <Row>
            {/* Navigation Columns */}
            <Col xs={12} md={2} className="mb-3">
              <h5>Products</h5>
              <Stack gap={2}>
                <a href="#" className="text-white text-decoration-none">
                  Features
                </a>
                <a href="#" className="text-white text-decoration-none">
                  Pricing
                </a>
                <a href="#" className="text-white text-decoration-none">
                  FAQs
                </a>
                <a href="#" className="text-white text-decoration-none">
                  Support
                </a>
              </Stack>
            </Col>

            <Col xs={12} md={2} className="mb-3">
              <h5>Company</h5>
              <Stack gap={2}>
                <a href="#" className="text-white text-decoration-none">
                  About Us
                </a>
                <a href="#" className="text-white text-decoration-none">
                  Contact
                </a>
                <a href="#" className="text-white text-decoration-none">
                  Blog
                </a>
                <a href="#" className="text-white text-decoration-none">
                  Careers
                </a>
              </Stack>
            </Col>

            <Col xs={12} md={2} className="mb-3">
              <h5>Legal</h5>
              <Stack gap={2}>
                <a href="#" className="text-white text-decoration-none">
                  Privacy Policy
                </a>
                <a href="#" className="text-white text-decoration-none">
                  Terms of Service
                </a>
                <a href="#" className="text-white text-decoration-none">
                  Cookie Policy
                </a>
              </Stack>
            </Col>

            {/* Newsletter Subscription */}
            <Col xs={12} md={5} className="offset-md-1 mb-3">
              <Form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <Stack direction="horizontal" gap={2}>
                  <Form.Control
                    type="email"
                    placeholder="Email address"
                    aria-label="Email address"
                  />
                  <Button variant="primary" type="submit">
                    Subscribe
                  </Button>
                </Stack>
              </Form>
            </Col>
          </Row>

          <hr className="footer-divider" />

          {/* Bottom section (Copyright & Social Media) */}
          <Row className="align-items-center">
            <Col xs={12} md={6}>
              <p className="mb-3 mb-md-0 text-center text-md-start">
                © {new Date().getFullYear()} Company, Inc. All rights reserved.
              </p>
            </Col>
            <Col xs={12} md={6}>
              <Stack direction="horizontal" gap={3} className="justify-content-center justify-content-md-end">
                <a href="#" aria-label="Instagram" className="text-white">
                  {/* Replace with a real SVG icon component or a React-friendly SVG */}
                  <i className="bi-instagram" style={{ fontSize: '1.5rem' }}></i>
                </a>
                <a href="#" aria-label="Facebook" className="text-white">
                  <i className="bi-facebook" style={{ fontSize: '1.5rem' }}></i>
                </a>
                <a href="#" aria-label="Twitter" className="text-white">
                  <i className="bi-twitter" style={{ fontSize: '1.5rem' }}></i>
                </a>
              </Stack>
            </Col>
          </Row>
        </Container>
      </footer>
    </Container>
  );
}
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();

  const backToHomePage = () => {
    navigate("/");
  };

  return (
    <>
      <Container
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <h1 className="mb-4">Page Not Found</h1>
        <Button onClick={backToHomePage}>Вернуться на главную</Button>
      </Container>
    </>
  );
}

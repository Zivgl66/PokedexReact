import "./footer.component.css";
import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from "mdb-react-ui-kit";

const FooterComponent = () => {
  return (
    <MDBFooter
      className=" text-center text-white footer container-fluid"
      style={{ borderRadius: "25px" }}
    >
      <MDBContainer className="p-1 pb-0">
        <section className="mb-2">
          <MDBBtn
            floating
            className="mx-1"
            style={{ backgroundColor: "#3b5998", borderRadius: "25px" }}
            href="https://www.facebook.com/ziv.galitzer"
            role="button"
            target="_blank"
          >
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>

          <MDBBtn
            floating
            className="mx-1 floatContact"
            style={{ backgroundColor: "#dd4b39", borderRadius: "25px" }}
            href="https://mail.google.com/mail/u/?authuser=zivgl66@gmail.com"
            role="button"
            target="_blank"
          >
            <MDBIcon fab icon="google" />
          </MDBBtn>

          <MDBBtn
            floating
            className="mx-1"
            style={{ backgroundColor: "#0082ca", borderRadius: "25px" }}
            href="https://www.linkedin.com/in/ziv-gliser-b0734022b"
            role="button"
            target="_blank"
          >
            <MDBIcon fab icon="linkedin-in" />
          </MDBBtn>

          <MDBBtn
            floating
            className="mx-1"
            style={{ backgroundColor: "#333333", borderRadius: "25px" }}
            href="https://github.com/Zivgl66"
            role="button"
            target="_blank"
          >
            <MDBIcon fab icon="github" />
          </MDBBtn>
        </section>
      </MDBContainer>
      <div className="d-flex justify-content-center">
        <div
          className="text-center w-50"
          style={{
            color: "black",
            borderRadius: "25px",
          }}
        >
          © 2022 Copyright: Zivgl66
        </div>
      </div>
    </MDBFooter>
  );
};

export default FooterComponent;

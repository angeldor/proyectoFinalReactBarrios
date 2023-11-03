import "./Footer.css"

const Footer = () => {
  return (
    <>
     <div className="footer">
      <p>Todos los derechos reservados &copy; {new Date().getFullYear()}</p>
     </div>
    </>
  );
};

export default Footer;

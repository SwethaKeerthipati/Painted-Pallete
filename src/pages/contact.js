import ContactUsPage from "../../components/ContactUs";
import Header from "../../components/Header";

const ContactUs = () => {
  return (
    <>
      <Header />

      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto py-5">
          <ContactUsPage />
        </div>
      </div>
    </>
  );
};

export default ContactUs;

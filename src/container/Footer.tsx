import { Logo } from "../assets/export";

const Footer = () => {
  return (
    <footer className="w-full lg:px-[4rem] md:px-[3rem] sm:px-[2rem] xs:px-4 py-8 bg-primary-100">
      <div className="flex sm:flex-row xs:flex-col justify-between items-start">
        <div className="basis-[40%] sm:mr-10">
          <img src={Logo} className="max-w-full" alt="footer-logo" />
          <p className="text-[15px] my-4">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p>
          <p className="text-[15px]">© Evogym All Rights Reserved.</p>
        </div>
        <div className="basis-[30%] sm:my-0 xs:my-8">
          <h3 className="text-sm font-bold cursor-pointer mb-4">Links</h3>
          <p className="text-[15px] mb-3">Massa orci senectus</p>
          <p className="text-[15px] mb-3">Ullamcorper vivamus</p>
          <p className="text-[15px]">Et gravida id et etiam</p>
        </div>
        <div className="basis-[30%]">
          <h3 className="text-sm font-bold cursor-pointer mb-4">Contact Us</h3>
          <p className="text-[15px] mb-3">
            Tempus metus mattis risus volutpat egestas.
          </p>
          <p className="text-[15px]">(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

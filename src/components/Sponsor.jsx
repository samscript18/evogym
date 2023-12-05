import {
  SponsorForbes,
  SponsorFortune,
  SponsorRedBull,
} from "../assets/export";

const Sponsor = () => {
  return (
    <div className="w-full bg-primary-100 lg:px-[4rem] md:px-[3rem] sm:px-[2rem] py-4">
      <div className="flex sm:flex-row xs:flex-col justify-start items-center">
        <div className="sm:w-[550px] sm:my-0 xs:my-8">
          <img src={SponsorForbes} className="max-w-full" alt="Forbes" />
        </div>
        <div className="sm:w-[550px] sm:my-0 xs:my-8">
          <img src={SponsorFortune} className="max-w-full" alt="Fortune" />
        </div>
        <div className="sm:w-[250px] sm:my-0 xs:my-8">
          <img src={SponsorRedBull} className="max-w-full" alt="RedBull" />
        </div>
      </div>
    </div>
  );
};
export default Sponsor;

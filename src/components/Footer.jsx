import logo from "@/assets/logo.png";
import { footer, socials } from "@/constants/footer";

const Footer = () => {
  return (
    <div className="bg-brandDark text-brandLighter py-10 flex flex-col items-center justify-center">
      <div className="md:w-1/3 w-full mx-auto text-center leading-10">
        <img src={logo} className="h-12 w-20 mx-auto" />
        <p className="text-base font-medium">{footer.text1}</p>
        <p className="text-base font-medium">{footer.text2}</p>
        <p className="text-lg font-bold">&copy; {footer.text3}</p>
        <div className="flex items-center justify-center mt-4 space-x-2">
          {socials.map((social, idx) => (
            <a key={idx} href={social.link} target="blank" className="md:flex hidden">
              <img src={social.img} className="h-6 w-6" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;

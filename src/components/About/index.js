import "../../App.css";
import DownloadIcon from "@mui/icons-material/Download";
import logo from '../../assets/images/19362653.jpg'; // Assurez-vous d'avoir l'extension de fichier correcte (jpg)
// import LearningCode from "../../assets/images/learn-coding-clipart.svg";


export default function About() {
  const getDate = () => {
    var dob = new Date("06/22/2000");
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);
    return age;
  };
  return (
    <div
      id="about"
      className="min-h-screen bg-white flex flex-col text-center gap-5 text-black text-lg font-normal"
    >
      <div className="head text-5xl mt-12 font-bold" data-aos={"slide-down"}>
        About Me
      </div>
      <div className="flex flex-row gap-6 ml-8">
        <div className="flex-col mt-14 flex flex-auto w-64 gap-6">
          <h3 className="text-3xl font-medium" data-aos={"fade-left"}>
            I'm <span className="text-yellow-600">Ayoub SAGHRO,</span> a Web & Mobile developer
          </h3>
          <p
            className="pt-5 leading-7 text-slate-900 text-justify"
            data-aos={"fade-left"}
          >
            I hold a bachelor's degree in Mathematics and Computer Sciences from FP Ouarzazate. I am {getDate()}{" "}
            years old. I love exploring new technologies.
          </p>
          <p
            className="text-justify leading-7 text-slate-900"
            data-aos={"fade-right"}
          >
            I am currently in the process of searching for job opportunities.
            I have a background as a developer with experience in technologies such as ReactJS,
            Next.js, TypeScript, Java, Spring, JEE, and more. Additionally,
            I am actively seeking opportunities to contribute to open-source projects
          </p>
        </div>

        <div
          className="relative flex-auto w-32 sm:rounded-lg pl-4"
          data-aos={"slide-left"}
        >
          <img src={logo} alt="Logo" style={{ width: "350px" }} />
        </div>
        <button className="py-3 mt-5 text-white mx-auto px-9 bg-blue-600 border-2 w-fit border-blue-500 rounded-3xl hover:-translate-y-1.5 duration-[350ms] hover:duration-[350ms] hover:bg-blue-800 hover:scale-[1.023] focus:bg-blue-800 animate-zoomy">
          <a
            href={require("../../assets/files/CV-AYOUB-SAGHRO.pdf")}
            download={"CV-AYOUB-SAGHRO.pdf"}
          >
            Download CV
            <DownloadIcon />
          </a>
        </button>
      </div>
    </div>
  );
}

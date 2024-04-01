// React Icon
import { FiDownload } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoDiscord } from "react-icons/io5";
import { TiHtml5 } from "react-icons/ti";
import { BsFiletypeCss } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaNode } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaSquareGithub } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { HiOutlineExternalLink } from "react-icons/hi";
export default function App() {
  return (
    <>
      <main class="w-full h-auto p-0">
        <section class="flex flex-row justify-between items-center h-auto px-20 py-6">
          <div class="flex flex-row justify-center items-center">
            <img
              class="size-16"
              src="../../../../logos/M.png"
              alt="logo personal"
            />
            <p class="text-xl font-bold font-rubik ml-2">Simo</p>
          </div>
          <p class="text-xl font-bold font-barlow">About Me</p>
          <p class="text-xl font-bold font-barlow">Skills</p>
          <p class="text-xl font-bold font-barlow">Project</p>
          <p class="text-xl font-bold font-barlow">Contact Me</p>
          <button class="w-32 h-14 w-36 p-4 rounded-xl text-white bg-black text-xl font-medium font-barlow flex flex-row justify-evenly items-center">
            Resume <FiDownload size="1.2rem" />
          </button>
        </section>
        <section class="flex flex-row px-20 py-24">
          <div class="w-1/2 flex flex-col justify-end items-start">
            <div class="mb-20">
              <div class="flex flex-row mb-4 text-5xl">
                <h1 class="font-rubik mr-4 font-thin">Hello I'am</h1>
                <h1>
                  <strong>Simo Bai.</strong>
                </h1>
              </div>
              <div class="flex flex-row mb-4 text-5xl">
                <h1 class="font-sora mr-4">
                  <strong>Frontend</strong>
                </h1>
                <h1 class="font-rubik font-thin">Developer</h1>
              </div>
              <div class="flex flex-row mb-8 text-5xl">
                <h1 class="font-rubik mr-4">Based In</h1>
                <h1>
                  <strong>Australia.</strong>
                </h1>
              </div>
              <p class="order-1 text-sm text-zinc-400">
                I'm Simo Bai Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to specimen book.
              </p>
            </div>
            <div class="w-80 flex flex-row justify-between p-0">
              <button class="size-14 flex justify-center items-center p-4 rounded text-white bg-black">
                <FaFacebook size="1.4rem" />
              </button>
              <button class="size-14 flex justify-center items-center p-4 rounded border-black border-2">
                <FaReddit size="1.4rem" />
              </button>
              <button class="size-14 flex justify-center items-center p-4 rounded border-black border-2">
                <FaSquareXTwitter size="1.4rem" />
              </button>
              <button class="size-14 flex justify-center items-center p-4 rounded border-black border-2">
                <IoLogoDiscord size="1.4rem" />
              </button>
            </div>
          </div>
          <img
            class="w-1/2"
            src="../../../../logos/hero-img.png"
            alt="hero-img"
          />
        </section>
        <section class="py-20 px-0 mb-20">
          <div class="w-auto text-5xl flex flex-row w-56 mb-20 justify-center items-center">
            <h1 class="mr-4">My</h1>
            <h1>
              <strong>Skills</strong>
            </h1>
          </div>
          <div class="grid grid-cols-5 justify-items-stretch gap-14 px-20">
            <div class="size-52 flex flex-col justify-evenly items-center p-6 border-2 border-solid border-black rounded bg-white">
              <TiHtml5 size="60" />
              <p class="font-sora font-bold text-lg">HTML 5</p>
            </div>
            <div class="size-52 flex flex-col justify-evenly items-center p-6 border-2 border-solid border-black rounded bg-black text-white">
              <IoLogoJavascript size="60" />
              <p class="font-sora font-bold text-lg">Javascript</p>
            </div>
            <div class="size-52 flex flex-col justify-evenly items-center p-6 border-2 border-solid border-black rounded bg-white">
              <BsFiletypeCss size="60" />
              <p class="font-sora font-bold text-lg">CSS 3</p>
            </div>
            <div class="size-52 flex flex-col justify-evenly items-center p-6 border-2 border-solid border-black rounded bg-white">
              <FaGitAlt size="60" />
              <p class="font-sora font-bold text-lg">Git</p>
            </div>
            <div class="size-52 flex flex-col justify-evenly items-center p-6 border-2 border-solid border-black rounded bg-white">
              <BiLogoPostgresql size="60" />
              <p class="font-sora font-bold text-lg">Postgresql</p>
            </div>
            <div class="size-52 flex flex-col justify-evenly items-center p-6 border-2 border-solid border-black rounded bg-white">
              <FaNode size="60" />
              <p class="font-sora font-bold text-lg">Expresss</p>
            </div>
            <div class="size-52 flex flex-col justify-evenly items-center p-6 border-2 border-solid border-black rounded bg-black text-white">
              <FaReact size="60" />
              <p class="font-sora font-bold text-lg">React</p>
            </div>
            <div class="size-52 flex flex-col justify-evenly items-center p-6 border-2 border-solid border-black rounded bg-white">
              <SiTailwindcss size="60" />
              <p class="font-sora font-bold text-lg">Tailwind CSS</p>
            </div>
            <div class="size-52 flex flex-col justify-evenly items-center p-6 border-2 border-solid border-black rounded bg-white">
              <FaSquareGithub size="60" />
              <p class="font-sora font-bold text-lg">Github</p>
            </div>
            <div class="size-52 flex flex-col justify-evenly items-center p-6 border-2 border-solid border-black rounded bg-white">
              <SiMongodb size="60" />
              <p class="font-sora font-bold text-lg">MongoDB</p>
            </div>
          </div>
        </section>
        {/* coming soon */}
        {/* <section class="flex flex-col justify-center items-center px-20 bg-black text-white">
          <div class="w-auto text-5xl flex flex-row w-56 my-20 justify-center items-center">
            <h1 class="mr-4">My</h1>
            <h1>
              <strong>Experience</strong>
            </h1>
          </div>
          <div class="my-6">
            <div class="flex flex-row justify-between">
              <div class="flex flex-row">
                <div class="mr-6">logo</div>
                <p class="mr-">Lead SoftWare Engineer ar Google</p>
              </div>
              <p>Nov 2019 - Present</p>
            </div>
            <p>
              As a Senior Software Engineer at Google, I played a pivotal role
              in developing innovative solutions for Google's core search
              algorithms. Collaborating with a dynamic team of engineers, I
              contributed to the enhancement of search accuracy and efficiency,
              optimizing user experiences for millions of users worldwide.
            </p>
          </div>
          <div class="my-6">
            <div class="flex flex-row justify-between">
              <div class="flex flex-row">
                <div class="mr-6">logo</div>
                <p class="mr-">Lead SoftWare Engineer ar Google</p>
              </div>
              <p>Nov 2019 - Present</p>
            </div>
            <p>
              As a Senior Software Engineer at Google, I played a pivotal role
              in developing innovative solutions for Google's core search
              algorithms. Collaborating with a dynamic team of engineers, I
              contributed to the enhancement of search accuracy and efficiency,
              optimizing user experiences for millions of users worldwide.
            </p>
          </div>
          <div class="my-6">
            <div class="flex flex-row justify-between">
              <div class="flex flex-row">
                <div class="mr-6">logo</div>
                <p class="mr-">Lead SoftWare Engineer ar Google</p>
              </div>
              <p>Nov 2019 - Present</p>
            </div>
            <p>
              As a Senior Software Engineer at Google, I played a pivotal role
              in developing innovative solutions for Google's core search
              algorithms. Collaborating with a dynamic team of engineers, I
              contributed to the enhancement of search accuracy and efficiency,
              optimizing user experiences for millions of users worldwide.
            </p>
          </div>
        </section> */}
        {/* <section class="flex flex-row justify-between px-20">
          <img
            class="w-1/2"
            src="../../../../logos/about-img.png"
            alt="about-img"
          />
          <div class="flex flex-col justify-between mt-4 mb-12">
            <h1>About Me</h1>
            <p>
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me.
            </p>
            <p>
              I began my journey as a web developer in 2015, and since then,
              I've continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, I'm building cutting-edge web applications
              using modern technologies such as Next.js, TypeScript, Nestjs,
              Tailwindcss, Supabase and much more.
            </p>
            <p>
              When I'm not in full-on developer mode, you can find me hovering
              around on twitter or on indie hacker, witnessing the journey of
              early startups or enjoying some free time. You can follow me on
              Twitter where I share tech-related bites and build in public, or
              you can follow me on GitHub.
            </p>
          </div>
        </section> */}
        <section class="flex flex-col justify-center items-center px-20 bg-black text-white pb-10">
          <div class="w-auto text-5xl flex flex-row w-56 my-20 justify-center items-center">
            <h1 class="mr-4">My</h1>
            <h1>
              <strong>Projects</strong>
            </h1>
          </div>
          <div class="flex flex-row justify-evenly mb-10">
            <div class="mr-4 basis-1/2">
              <img
                class="w-11/12"
                src="../../../../logos/project1.png"
                alt="project1"
              />
            </div>
            <div class="flex flex-col justify-evenly basis-1/2">
              <h2 class="font-sora text-5xl text-bold">01</h2>
              <h3 class="font-sora text-3xl text-bold">
                Crypto Screener Application
              </h3>
              <p class="text-sm text-zinc-400">
                I'm Evren Shah Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to specimen book.
              </p>
              <button>
                <HiOutlineExternalLink size="30" />
              </button>
            </div>
          </div>
          <div class="flex flex-row justify-evenly mb-10">
            <div class="flex flex-col justify-evenly basis-1/2">
              <h2 class="font-sora text-5xl text-bold">02</h2>
              <h3 class="font-sora text-3xl text-bold">
                Crypto Screener Application
              </h3>
              <p class="text-sm text-zinc-400">
                I'm Evren Shah Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to specimen book.
              </p>
              <button>
                <HiOutlineExternalLink size="30" />
              </button>
            </div>
            <div class="ml-10 basis-1/2 flex flex-row justify-end">
              <img
                class="w-11/12"
                src="../../../../logos/project1.png"
                alt="project1"
              />
            </div>
          </div>
          <div class="flex flex-row justify-evenly mb-10">
            <div class="mr-4 basis-1/2">
              <img
                class="w-11/12"
                src="../../../../logos/project1.png"
                alt="project1"
              />
            </div>
            <div class="flex flex-col justify-evenly basis-1/2">
              <h2 class="font-sora text-5xl text-bold">03</h2>
              <h3 class="font-sora text-3xl text-bold">
                Crypto Screener Application
              </h3>
              <p class="text-sm text-zinc-400">
                I'm Evren Shah Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to specimen book.
              </p>
              <button>
                <HiOutlineExternalLink size="30" />
              </button>
            </div>
          </div>
        </section>
        <section class="flex flex-row justfiy-between px-20 my-20">
          <div class="flex flex-col mr-8 basis-1/2">
            <input
              class="border-2 w-4/5 rounded-md border-black px-6 py-4 mb-4"
              type="text"
              placeholder="Your name"
            />
            <input
              class="border-2 w-4/5 rounded-md border-black px-6 py-4 mb-4"
              type="text"
              placeholder="Email"
            />
            <input
              class="border-2 w-4/5 rounded-md border-black px-6 py-4 mb-4"
              type="text"
              placeholder="Your website (If exists)"
            />
            <input
              class="border-2 w-4/5 rounded-md border-black px-6 pt-4 pb-24 mb-4"
              type="text"
              placeholder="How can I help?"
            />
            <div class="w-4/5 flex flex-row justify-between p-0">
              <button class="w-36 h-14 p-4 rounded text-white bg-black text-xl font-s flex flex-row justify-evenly items-center">
                Get in Touch
              </button>
              <button class="size-14 flex justify-center items-center p-4 rounded text-white bg-black">
                <FaFacebook size="1.4rem" />
              </button>
              <button class="size-14 flex justify-center items-center p-4 rounded border-black border-2">
                <FaReddit size="1.4rem" />
              </button>
              <button class="size-14 flex justify-center items-center p-4 rounded border-black border-2">
                <FaSquareXTwitter size="1.4rem" />
              </button>
              <button class="size-14 flex justify-center items-center p-4 rounded border-black border-2">
                <IoLogoDiscord size="1.4rem" />
              </button>
            </div>
          </div>
          <div class="basis-1/2">
            <div class="flex flex-row font-sora text-5xl mb-4 mt-20">
              <h1 class="mr-4 font-bold">Let's</h1>
              <h1 class="font-rubik mr-4">talk</h1>
              <h1 class="font-bold">for</h1>
            </div>
            <div class="flex flex-row font-sora font-bold text-5xl mb-6">
              <h1 class="mr-4">Somthing</h1>
              <h1>special</h1>
            </div>
            <p class="order-1 text-sm text-zinc-400 mb-8">
              I seek to push the limits of creativity to create high-engaging,
              user-friendly, and memorable interactive experiences.
            </p>
            <button class="font-sora font-bold text-3xl mb-2 flex underline underline-offset-1">
              simobai1024@gmail.com
            </button>
            <button class="font-sora font-bold text-3xl mb-2 underline underline-offset-1">
              +61 493724304
            </button>
          </div>
        </section>
        <section class="flex flex-row justify-between items-center w-full h-auto px-20 py-6 bg-black text-white">
          <div class="flex flex-row justify-center items-center">
            <img
              class="size-16"
              src="../../../../logos/M-.png"
              alt="logo personal"
            />
            <p class="text-xl font-bold font-rubik ml-2">Simo</p>
          </div>
          <div class="font-sora">
            <p>2023-2024 Personal</p>
            <p>Made by Simo</p>
          </div>
        </section>
      </main>
    </>
  );
}

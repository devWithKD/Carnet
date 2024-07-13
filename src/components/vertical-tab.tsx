"use client";
import { Spectral, Montserrat } from "next/font/google";
import { ReactNode, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconType } from "react-icons/lib";
import { FaGithub, FaXTwitter } from "react-icons/fa6";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

function Title({ children }: { children: ReactNode }) {
  return (
    <h3
      className={`${montserrat.className} text-2xl lg:text-3xl italic font-bold primary-text mb-4`}
    >
      {children}
    </h3>
  );
}

function Content({ children }: { children: ReactNode }) {
  return (
    <p className={`${montserrat.className} font-light mb-2 text-lg leading-8`}>
      {children}
    </p>
  );
}

function TabWraper({ children, tabidx }: { children: ReactNode; tabidx: number }) {
  return (
    <motion.div
      key={tabidx}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}

function Social({ children, Icon }: { children: ReactNode; Icon: IconType }) {
  return (
    <div className="flex items-center gap-4">
      <div className="">
        <Icon size={22} />
      </div>
      {children}
    </div>
  );
}

function VerticalTab() {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className="mt-8 md:mt-16 flex flex-col md:flex-row flex-grow gap-8 max-w-[40rem] min-h-[20rem]">
      <div className="flex w-10">
        <nav>
          <ul
            className={`${spectral.className} flex flex-row md:flex-col gap-5 items-start text-xl md:text-3xl leading-6 md:font-thin text-nowrap select-none`}
          >
            <li
              className={`vertical-tab ${tabIndex == 0 && "active"}`}
              onClick={() => setTabIndex(0)}
            >
              Info
            </li>
            <li
              className={`vertical-tab ${tabIndex == 1 && "active"}`}
              onClick={() => setTabIndex(1)}
            >
              Features
            </li>
            <li
              className={`vertical-tab ${tabIndex == 2 && "active"}`}
              onClick={() => setTabIndex(2)}
            >
              Contact
            </li>
          </ul>
        </nav>
      </div>
      <AnimatePresence mode="wait">
        {tabIndex == 0 && (
          <TabWraper tabidx={0}>
            <Title>Info.</Title>
            <Content>
              A markdown-oriented note-taking app designed to help you capture
              your thoughts, ideas, and inspirations anytime, anywhere. Inspired
              by the best features of Obsidian, Carnet is your go-to tool for
              seamless, efficient, and creative note-taking. With its intuitive
              interface and robust functionality, Carnet ensures your notes are
              always organized, accessible, and beautifully formatted, making it
              easier than ever to stay productive and inspired.
            </Content>
          </TabWraper>
        )}
        {tabIndex == 1 && (
          <TabWraper tabidx={1}>
            <Title>Features.</Title>
            <ul className={`${montserrat.className} flex flex-col gap-3`}>
              <li>
                <h4 className="text-xl font-medium mb-2">Markdown Made Easy</h4>
                <Content>
                  Jot, format, and organize your thoughts with ease.
                  Carnet&apos;s markdown and rich text tools make your notes
                  look effortlessly stylish.
                </Content>
              </li>
              <li>
                <h4 className="text-xl font-medium mb-2">
                  Accessible Anywhere
                </h4>
                <Content>
                  Stay in sync wherever you are. Whether it&apos;s your phone,
                  tablet, or laptop, Carnet keeps your notes within arm&apos;s
                  reach.
                </Content>
              </li>
            </ul>
          </TabWraper>
        )}
        {tabIndex == 2 && (
          <TabWraper tabidx={2}>
            <Title>Contact.</Title>
            {/* <div className="grid grid-cols-2 py-8 gap-8">
              <Social Icon={FaXTwitter}>
                <a href="https://x.com/devWithKD" className="text-xl">
                  @devWithKD
                </a>
              </Social>
              <Social Icon={FaGithub}>
                <a href="https://x.com/devWithKD" className="text-xl">
                  @devWithKD
                </a>
              </Social>
            </div> */}
            <Content>
              Reach me at my{" "}
              <a
                href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#107;&#100;&#64;&#100;&#101;&#118;&#119;&#105;&#116;&#104;&#107;&#100;&#46;&#99;&#111;&#109;"
                className="underline font-medium"
              >
                email
              </a>{" "}
              or{" "}
              <a
                href="https://twitter.com/messages/compose?recipient_id=1063841225571131393"
                className="underline font-medium"
              >
                @devWithKD
              </a>
            </Content>
            <Content>
              Github: <a href="https://github.com/devWithKD" className="font-medium">@devWithKD</a>
            </Content>
            <Content>LinkedIn: <a href="https://www.linkedin.com/in/devwithkd/" className="underline font-medium">Kedar Joshi</a></Content>
          </TabWraper>
        )}
      </AnimatePresence>
    </div>
  );
}

export default VerticalTab;

import React from "react";
import contributeSvg from "../../../assets/images/open-source-contribution.svg";
import communitySvg from "../../../assets/images/undraw_public_discussion_re_w9up.svg";
import ResourcesSvg from "../../../assets/images/undraw_firmware_re_fgdy.svg";
import logoThecyberworld from "../../../assets/images/ThecyberworldLogo/Thecyberworld_logo_outlined.png";
import VersionControlSvg from "../../../assets/images/undraw_version_control_re_mg66.svg";

import { FaGithub } from "react-icons/fa";
// import { GoPrimitiveDot } from "react-icons/go";
import { IconsSpacing, IconsSpacing2 } from "../../Other/MixComponents/Buttons/ButtonElements";
import { BsFillPlayFill } from "react-icons/bs";
import { DotSymbol } from "./InfoElements";

export const aboutData = {
    id: "about",
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: "Thecyberworld Community",
    headline: "About Thecyberworld",
    description: (
        <>
            <DotSymbol /> Cyber Security courses for FREE (coming soon) <br /> <br />
            <DotSymbol /> Community&apos;s goal is to help new folks to get started with Opensource and Cybersecurity.
            <br />
            <br />
            <DotSymbol /> Community with more than 150,000 members. <br />
            <br />
            <DotSymbol /> Thecyberhub Website, Mobile App, Web Extensions, and <br /> Bots are built by @thecyberworld
            community <br />
            <br />
            <DotSymbol /> Opensource projects. <br />
            <br />
            <DotSymbol /> A Hub of Cyber Security. <br />
            <br />
        </>
    ),
    buttonLabel1: "Join our community",
    link1: "/community",
    buttonType1: "router",
    buttonLabel2: "Contribute to Opensource",
    link2: "contribute",
    buttonType2: "scroll",
    imgStart: false,
    img: logoThecyberworld,
    alt: "Car",
    dark: true,
    primary: true,
    darkText: false,
};

export const ResourcesData = {
    id: "resources",
    buttonType1: "router",
    link1: "/roadmaps",
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: "Resources",
    headline: "Cyber Sec Resources",
    description: (
        <>
            Explore cyber security resources. <br />
            Courses, ctfs, events, blogs, tools, writeups, roadmaps, and much more.
        </>
    ),
    buttonLabel1: (
        <>
            {" "}
            Explore{" "}
            <IconsSpacing2>
                {" "}
                <BsFillPlayFill />{" "}
            </IconsSpacing2>{" "}
        </>
    ),
    imgStart: true,
    img: ResourcesSvg,
    alt: "ResourcesSvg",
    dark: true,
    primary: true,
    darkText: false,
};

export const communityData = {
    id: "community",
    idTo: "join",
    buttonLabel1: "Join community",
    link1: "https://discord.gg/thecyberworld-799183504759324672",
    buttonType1: "redirect",
    buttonLabel2: "All community links",
    link2: "https://linktr.ee/thecyberworld",
    buttonType2: "redirect",
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: "Join our Community",
    headline: "150,000+ members",
    description: (
        <>
            Community&apos;s goal is to help new folks to get started with open-source, cyber-security and to help
            existing folks get more involved in the open-source and cyber-security communities.
        </>
    ),
    imgStart: true,
    img: communitySvg,
    alt: "Secure data",
    dark: true,
    primary: true,
    darkText: false,
};

export const contributeData = {
    id: "contribute",
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: "Contribute to Thecyberworld",
    headline: "Want to contribute?",
    description: (
        <>
            That&apos;s great! We welcome all sorts of contributions from raising issues, starting discussions, adding
            documentation, making pull requests and so much more! Help each other and make improvements! Check the
            contributing guidelines in each repository for guidance on how to get started.
        </>
    ),
    buttonLabel1: (
        <>
            <IconsSpacing>
                {" "}
                <FaGithub />{" "}
            </IconsSpacing>
            Contribute to Github
        </>
    ),
    link1: "https://github.com/thecyberworld",
    buttonType1: "redirect",
    buttonLabel2: <>Contribute to Community</>,
    link2: "/community",
    buttonType2: "router",
    imgStart: false,
    img: contributeSvg,
    alt: "Secure data",
    dark: true,
    primary: true,
    darkText: false,
};

export const OpenSource = {
    id: "contribute",
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: "Open Source",
    headline: "What is Open Source?",
    description: (
        <p>
            Open source software (OSS) is software that is distributed with its source code, making it available for
            use, modification, and distribution with its original rights.
        </p>
    ),
    buttonLabel_ContributeToOpensource: (
        <>
            <IconsSpacing>
                <FaGithub />
            </IconsSpacing>
            Contribute now
        </>
    ),
    buttonLabelNew: "Open Source Projects",
    imgStart: false,
    img: VersionControlSvg,
    alt: "Secure data",
    dark: true,
    primary: true,
    darkText: false,
};

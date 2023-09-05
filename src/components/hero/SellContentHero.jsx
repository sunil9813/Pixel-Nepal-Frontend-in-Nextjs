import { AiOutlineBarChart, AiOutlineEdit, AiOutlineTags, AiOutlineUpload } from "react-icons/ai";
import { TitleHeading } from "../common/design/Title";
import { BsCloudUpload } from "react-icons/bs";
import { CiBadgeDollar } from "react-icons/ci";
import { GiWorld } from "react-icons/gi";
import { BiBook } from "react-icons/bi";
import { Accordion, AccordionHeader, AccordionBody, Typography, Card, CardBody, CardHeader } from "@material-tailwind/react";
import { useState } from "react";
import { Card1 } from "./Explore";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export const SellContentHero1 = () => {
  const datasell1 = [
    {
      id: 1,
      title: "Create ",
      desc: "photos, vectors, illustrations, mockups, etc. We embrace all types of creativity.",
      icon: <AiOutlineEdit size={25} />,
      color: "bg-red-300",
    },
    {
      id: 2,
      title: "Upload",
      desc: "your graphic resources to SnapHub through our intuitive and easy-to-use tool.",
      icon: <BsCloudUpload size={20} />,
      color: "bg-blue-300",
    },
    {
      id: 3,
      title: "Make money",
      desc: "per every download your resources get. As simple as that.",
      icon: <CiBadgeDollar size={30} />,
      color: "bg-orange-300",
    },
  ];
  return (
    <>
      <div className="flex items-center justify-between containers mt-8">
        <div className="left w-1/2  mt-8">
          <TitleHeading title1="Sell photos, vectors & PSD" title2="designs on SnapHub" />
          <p className="text-lg mt-3 mb-8">Become a SnapHub contributor and make money selling your images and designs online.</p>
          {datasell1.map((item) => (
            <div className="box flex gap-3 items-center mb-5" key={item.id}>
              <div className={`icon flex items-center justify-center text-white ${item.color} w-12 h-12 rounded-lg`}>{item.icon}</div>
              <div className="details">
                <h3 className="text-sm font-medium">{item.title}</h3>
                <p className="text-sm">{item.desc} </p>
              </div>
            </div>
          ))}
          <button className="primary-btn px-8 text-md rounded-md mt-5">Become a Contributor</button>
        </div>
        <div className="right w-1/2">
          <img src="/images/contributor/c1.webp" alt="" />
        </div>
      </div>
    </>
  );
};
export const SellContentHero2 = () => {
  const sellCdata = [
    {
      id: 1,
      title: "Sell Photos",
      desc: "Find your concept, capture it and make money selling outstanding stock photos online with SnapHub.",
      category: "Photos",
      cover: "/images/contributor/c2.webp",
    },
    {
      id: 2,
      title: "Sell illustrations & vector art",
      desc: "Create quality and useful designs that sell best online: banners, wedding invitations, backgrounds... There are countless options!",
      category: "vectors",
      cover: "/images/contributor/c3.webp",
    },
    {
      id: 3,
      title: "Sell PSD designs",
      desc: "Design unique and eye-catching mockups and templates that show your true potential and make you earn money online",
      category: "PSD",
      cover: "/images/contributor/c2.webp",
    },
  ];
  return (
    <>
      <div className="creative py-12 bg-red-50 mt-8">
        <div className="containers">
          <div className="heading text-center w-1/2 m-auto">
            <TitleHeading title1="Enjoy creative freedom" />
            <p className="mt-2">At SnapHub, there’s room for your creativity, whatever your talent is. Choose the graphic resources you want to sell and upload them to our platform.</p>
          </div>
          <div className="content pt-8 [&>*:nth-child(even)]:flex-row-reverse">
            {sellCdata.map((item) => (
              <div className="box flex justify-between items-center gap-5 mb-5" key={item.id}>
                <div className="left w-1/3" data-aos="fade-down">
                  <TitleHeading title1={item.title} />
                  <p className="text-sm py-8">{item.desc}</p>
                  <button className="primary-outline-btn rounded-md">{item.category} guidelines</button>
                </div>
                <div className="right w-2/3" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                  <img src={item.cover} alt={item.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export const SellContentHero3 = () => {
  const data = [
    {
      id: 1,
      icon: <CiBadgeDollar size={30} />,
      title: "Stable income",
      desc: "We offer you more than one way to make money selling your stock photography & designs. Get paid for every download your resources get and boost your earnings by participating in our special promos and Referral Program.",
    },
    {
      id: 2,
      icon: <GiWorld size={30} />,
      title: "Worldwide visibility",
      desc: "Contributors’ resources get over 1M downloads every day, making SnapHub the best website for selling your photos, vector art & PSD files.",
    },
    {
      id: 3,
      icon: <BiBook size={30} />,
      title: "Tips & inspiration",
      desc: "Get personalized guidance and support along the process. Receive feedback before publishing your graphic resources and enjoy first-hand tips from our team to help you make money by selling your stock images with us.",
    },
  ];
  return (
    <>
      <div className="creative py-12">
        <div className="containers">
          <div className="heading text-center w-1/2 m-auto">
            <TitleHeading title1="Why become a SnapHub contributor?" />
          </div>
          <div className="content grid grid-cols-3 gap-12 py-8">
            {data.map((item) => (
              <div className="box p-5 rounded-md bg-white shadow-shadow1" key={item.id}>
                <div className="text-primary">{item.icon}</div>
                <h3 className="text-xl font-medium my-4">{item.title}</h3>
                <p className="text-sm leading-loose">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center">
            <button className="primary-btn px-8 text-md rounded-md mt-5 ">Become a Contributor</button>
          </div>
        </div>
      </div>
    </>
  );
};
export const SellContentHero4 = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const data = [
    {
      id: 1,
      title: "What can I sell on SnapHub?",
      desc: "On SnapHub, we embrace all types of creativity. You can sell quality photographs, vectors, illustrations, mockups, and templates online once you become a SnapHub contributor. Millions of users download stock content from SnapHub every day, which means our site is the best place to sell your images and designs.",
    },
    {
      id: 2,
      title: "How do I become a SnapHub contributor?",
      desc: "You must register and create a contributor account. Once you’re registered, upload and send 10 resources—they can be vectors, illustrations, photos, or PSD files. Our team will review them and check if they meet our quality standards, so it’s important that they show your true potential. You’ll become a contributor and start making money once your resources are published.",
    },
    {
      id: 3,
      title: "How can I sell my photos online?",
      desc: "Register as a SnapHub contributor, upload quality stock photos, and make money. Read our photos guidelines to make sure they align with SnapHub’s technical and quality standards. We’ll guide you through the process, so selling photographs on SnapHub is easy even for beginners.",
    },
    {
      id: 4,
      title: "How can I sell my vector art online?",
      desc: "To make money by selling your vectors and illustrations on SnapHub, register as a contributor and upload your best designs. Read our guidelines to create quality vector art that sells best.",
    },
    {
      id: 5,
      title: "How can I sell my PSD designs online?",
      desc: "If you have quality mockups and templates in Photoshop Document’s file format, you can sell them online with SnapHub. Register as a contributor and upload your PSD designs to start making money. Before putting your PSD files on sale, read our guidelines to ensure they meet our standards.",
    },
    {
      id: 6,
      title: "How much do I earn?",
      desc: "Contributors get paid for every download their stock content gets. This is one of the reasons that makes SnapHub the best place to sell your photos, vectors, and PSD designs online.",
    },
  ];

  return (
    <>
      <div className="containers py-8">
        <div className="text-center">
          <TitleHeading title1="Frequently Asked Questions" />
        </div>
        <div className="contnet mt-8">
          {data.map((item) => (
            <Accordion key={item} open={open === item.id} className="border border-blue-gray-100 px-4 rounded-lg mb-2">
              <AccordionHeader onClick={() => handleOpen(item.id)} className="border-b-0 transition-colors font-semibold text-lg">
                {item.title}
              </AccordionHeader>
              <AccordionBody className="text-base font-normal pt-0">{item.desc}</AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </>
  );
};
export const SellContentHero5 = () => {
  return (
    <>
      <section className="containers mt-8">
        <div className="text-center">
          <TitleHeading title1="Intuitive tool designed to fit you" />
          <p className="text-lg mt-3 mb-8">Manage your photos, vectors, and PSD files easily from one single place.</p>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-12">
          <div className="box flex justify-center items-center flex-col gap-5">
            <Card1 icon={<AiOutlineUpload size={25} className="text-primary bg-red-100" />} />
            <Typography>Batch uploading</Typography>
            <div className="line h-0.5 w-48 bg-blue-500"></div>
          </div>
          <div className="box flex justify-center items-center flex-col gap-5">
            <Card1 icon={<AiOutlineTags size={25} />} />
            <Typography>Add tags easily</Typography>
            <div className="line h-0.5 w-48 bg-red-500"></div>
          </div>
          <div className="box flex justify-center items-center flex-col gap-5">
            <Card1 icon={<AiOutlineBarChart size={25} className="text-primary bg-red-100" />} />
            <Typography>Measure your impact</Typography>
            <div className="line h-0.5 w-48 bg-orange-500"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export const SellContentHero6 = () => {
  return (
    <>
      <section className="flex justify-between bg-orange-50 my-16 containers rounded-md">
        <div className="w-1/2">
          <img src="https://static-contributor-fp.cdnpk.net/assets/ef78bdafd5189eaeca62.webp" alt="" />
        </div>
        <div className="w-1/2 p-12">
          <Typography variant="h5">Measure your impact</Typography>
          <Typography variant="small" className="my-6">
            From the contributor panel, you can track the status of your resources, monitor the downloads that your stock images & designs get, and check your earnings.{" "}
          </Typography>
          <Typography className="my-6">
            <span className="text-sm font-semibold">Performance history:</span> Get an overview of how your resources are performing on Freepik. Check the downloads, earnings, and statistics to make the most of your profile.
          </Typography>
          <Typography>
            <span className="text-sm font-semibold"> Monitor your resources: </span>Keep track of the status of your resources. If any of your PSD resources, designs, or photos are rejected, you’ll also receive detailed feedback on how to optimize them.
          </Typography>
          <Typography className="mt-6">
            <span className="text-sm font-semibold">CVS file: </span> Download all your statistics for more in-depth monitoring.
          </Typography>
          <Typography>Measure </Typography>
        </div>
      </section>

      <section>
        <Card shadow={false} className="relative grid h-[20rem] containers items-end justify-center overflow-hidden text-center">
          <CardHeader floated={false} shadow={false} color="transparent" className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://mediablog.cdnpk.net/sites/7/2023/07/cover-EN-9.png')] bg-cover bg-center">
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </CardHeader>
          <CardBody className="relative">
            <Typography variant="h2" color="white" className="-mt-40 font-medium leading-[1.5]">
              Join in on something big
            </Typography>
          </CardBody>
        </Card>
      </section>
    </>
  );
};
export const SellContentHero7 = () => {
  return (
    <>
      <section className="containers my-8">
        <div className="text-center">
          <TitleHeading title1="Discover the benefits of our community" />
          <p className="text-lg mt-3 mb-8">SanpHub's contributor community is formed by thousands of photographers and designers from all over the world. Connect with other talented people and enjoy the benefits of our community.</p>
        </div>
        <div className="grid grid-cols-2 gap-5 mt-12">
          <SellContentHeroCards cover="https://static-contributor-fp.cdnpk.net/assets/66c4fcfcd82177608714.webp" title="Referral Program" desc="Participate in our Referral Program: tell your friends about us and make more money." show={true} />
          <SellContentHeroCards cover="https://static-contributor-fp.cdnpk.net/assets/ed40e953443b575b65ea.webp" title="Become a Brand Ambassador" desc="Spread the word about Freepik’s contributor program in your community and enjoy awesome perks." show={true} />
        </div>
      </section>
    </>
  );
};
export const SellContentHero8 = () => {
  return (
    <>
      <section className="containers my-8">
        <div className="text-center">
          <TitleHeading title1="Stories from our contributors" />
        </div>
        <div className="grid grid-cols-4 gap-5 mt-12">
          <SellContentHeroCards cover="https://static-contributor-fp.cdnpk.net/assets/3347e90bc530283272c2.webp" title="Freepik PROfiles: The Freelancer Life With Illustrator Alexander Gusev" show={false} category="FEATURED ARTIST" author={true} />
          <SellContentHeroCards cover="https://static-contributor-fp.cdnpk.net/assets/0e6d95f9792b8ca29826.webp" title="Freepik PROfiles: How Prakasit Became the First Brand Ambassador" show={false} category="FEATURED ARTIST" author={true} />
          <SellContentHeroCards cover="https://static-contributor-fp.cdnpk.net/assets/0aebbe2d3333c9eb74e0.webp" title="Freepik PROfiles: The Freelancer Life With Illustrator Alexander Gusev" show={false} category="FEATURED ARTIST" author={true} />
          <SellContentHeroCards cover="https://static-contributor-fp.cdnpk.net/assets/4e02428d3807631c0c34.webp" title="Freepik PROfiles: The Freelancer Life With Illustrator Alexander Gusev" show={false} category="FEATURED ARTIST" author={true} />
        </div>
      </section>
    </>
  );
};

export const SellContentHeroCards = (props) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader floated={false} shadow={false} color="transparent" className="m-0 rounded-none">
        <img src={props?.cover} alt="ui/ux review check" />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="blue-gray" className="text-center pt-3">
          {props?.category}
        </Typography>
        <Typography variant="h4" color="blue-gray">
          {props?.title}
        </Typography>
        <Typography color="gray" className="my-5 font-normal">
          {props?.desc}
        </Typography>
        {props?.author && (
          <h3 className="flex items-center gap-1">
            by
            <Link href="/" className="flex items-center text-indigo-500 gap-2">
              SnapHub
            </Link>
          </h3>
        )}
        {props?.show && (
          <Link href="/" className="flex items-center font-semibold text-indigo-500 gap-2">
            More about Referral Program
            <HiOutlineArrowNarrowRight size={20} />
          </Link>
        )}
      </CardBody>
    </Card>
  );
};

import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header/Header_1";
import Footer from "@/components/Footer/Footer_1";
import Section from "@/components/Section/Section_1";
import SectionHeader from "@/components/Section/SectionHeader_1";
import Menu from "@/components/Menu/Menu_1";
import Logo from "@/components/Logo/Logo_1";
import ButtonLink from "@/components/ButtonLink/ButtonLink_1";
import Grid from "@/components/Grid/Grid_1";
import Blurbs from "@/components/Blurbs/Blurbs_1";
import Cards from "@/components/Cards/Cards_1";
import Accordion from "@/components/Accordion/Accordion_1";
import {
  advantages,
  cources,
  benefit,
  popular,
  whyUs,
  aboutUs,
  addmission,
  faq,
} from "@/data/data_1.js";

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <title>Meta title</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Meta description" />
        <meta property="og:title" content="Meta title" />
        <meta property="og:description" content="Meta description" />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:image:alt" content="Meta title" />
        <meta name="twitter:title" content="Meta title" />
        <meta name="twitter:description" content="Meta description" />
        <meta name="twitter:url" content="/?src=twitter" />
        <meta name="twitter:image:src" content="/favicon.ico" />
        <meta name="twitter:image:alt" content="Meta title" />
        <meta name="twitter:creator" content="@estellevw" />
        <meta name="twitter:site" content="@perfmattersconf" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="icon" type="image/png" href="/images/favicon.png" /> */}
      </Head>
      <Header>
        <Logo />
        <Menu
          items={[
            { link: "#cources", title: "Cources" },
            { link: "#benefit", title: "Benefit" },
            { link: "#popular", title: "Popular" },
            { link: "#why-us", title: "Why us" },
            { link: "#about-us", title: "About us" },
          ]}
        />
      </Header>
      <Section className="bg-[#daeefd] bg-[url('/images/bg-2.png')] bg-contain bg-right-top bg-no-repeat shadow-xl shadow-[#daeefd]">
        <Grid className="md:grid-cols-2">
          <div>
            <h1 className="mb-6 font-serif text-5xl">
              Study, Learn &amp; Live a New Language!
            </h1>
            <p className="mb-8">
              Cras ultricies ligula sed magna dictum porta. Curabitur arcu erat,
              accumsan id imperdiet et, porttitor at sem. Quisque velit nisi,
              pretium ut lacinia in, elementum id
            </p>
            <ButtonLink colorTheme="main" text="Summer Registration is Open!" />
          </div>
        </Grid>
      </Section>
      <Section>
        <Grid className="md:grid-cols-2 lg:grid-cols-3">
          <Blurbs items={advantages} />
        </Grid>
      </Section>
      <Section id="cources">
        <p className="text-center font-serif text-4xl uppercase leading-3 text-gray-100 md:text-8xl">
          COURES
        </p>
        <SectionHeader title="Our Course Offerings" className="text-center" />
        <Grid className="rounded-2xl shadow-2xl shadow-gray-600/20 md:grid-cols-2 md:gap-24 lg:grid-cols-3">
          <Cards items={cources} />
        </Grid>
      </Section>
      <Section>
        <Grid className="items-center rounded-2xl bg-[#1d2530] md:grid-cols-2 md:gap-24">
          <div className="px-4">
            <SectionHeader title="Register Today!" className="text-white" />
            <p className="text-white">
              Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
              Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum
              ante ipsum primis Curabitur non nulla sit amet nisl tempus
              convallis quis ac lectus.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <ButtonLink colorTheme="main" text="All Courses" />
            <ButtonLink colorTheme="second" text="Contact Us" />
          </div>
        </Grid>
      </Section>
      <Section id="benefit">
        <SectionHeader
          title="Why Learn a New Language?"
          className="text-center"
        />
        <Grid className="gap-y-20 gap-x-16 md:grid-cols-2">
          <Blurbs items={benefit} />
        </Grid>
      </Section>
      <Section id="popular">
        <p className="text-center font-serif text-4xl uppercase leading-3 text-gray-100 md:text-8xl">
          FEATURED
        </p>
        <SectionHeader title="Popular Courses" className="text-center" />
        <Grid className="rounded-2xl shadow-2xl shadow-gray-600/20 md:grid-cols-2 md:gap-24">
          <Image alt="" width={536} height={450} src="/images/popular-1.png" />
          <div className="px-4">
            {popular.map((item, index) => (
              <div key={index} className="mb-8">
                <p className="mb-4 text-xs font-bold uppercase text-orange-200">
                  {item.subtitle}
                </p>
                <p className="mb-4 font-serif text-2xl">{item.title}</p>
                <p className="mb-6">{item.text}</p>
                <p className="text-right">
                  <ButtonLink colorTheme="main" text={item.link} />
                </p>
              </div>
            ))}
          </div>
        </Grid>
      </Section>
      <Section id="why-us">
        <p className="text-center font-serif text-4xl uppercase leading-3 text-gray-100 md:text-8xl">
          CHOOSE US
        </p>
        <SectionHeader title="Why Learn With Us?" className="text-center" />
        <Grid className="md:grid-cols-2 md:gap-24">
          <div>
            {whyUs.map((item, index) => (
              <div key={index} className="mb-12">
                <p className="mb-4 font-serif text-2xl">{item.title}</p>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <Image alt="" width={510} height={480} src="/images/why-us-1.png" />
        </Grid>
      </Section>
      <Section>
        <Grid className="items-center md:grid-cols-2 md:gap-24">
          <Image alt="" width={536} height={450} src="/images/online-1.png" />
          <div>
            <p className="mb-4 text-xs font-bold uppercase text-orange-200">
              Learn From Home
            </p>
            <p className="mb-6 font-serif text-5xl">Online Learning Options</p>
            <p className="mb-6">
              Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
              Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum
              ante ipsum primis Curabitur non nulla sit amet nisl tempus
              convallis
            </p>
            <p className="text-right">
              <ButtonLink colorTheme="main" text="Register online" />
            </p>
          </div>
        </Grid>
      </Section>
      <Section id="about-us">
        <div className="rounded-2xl shadow-2xl shadow-gray-600/20">
          <Grid className="items-center md:grid-cols-2 md:gap-24">
            <div className="px-4">
              <p className="mb-4 text-xs font-bold uppercase text-orange-200">
                About US
              </p>
              <p className="mb-6 font-serif text-5xl">Our Story</p>
              <p className="mb-6">
                Curabitur non nulla sit amet nisl tempus convallis quis ac
                lectus. Vivamus suscipit tortor eget felis porttitor volutpat.
                Vestibulum ante ipsum primis Curabitur non nulla sit amet nisl
                tempus convallis quis ac lectus. Curabitur non nulla sit amet
                nisl tempus convallis quis ac lectus. Vivamus suscipit tortor
                eget felis porttitor volutpat. Vestibulum ant curabitur non
                nulla sit amet nisl tempus convallis quis ac lectus. Vivamus
                suscipit tortor eget felis porttitor volutpat. Vestibulum ante
                ipsum primis Curabitur non nulla sit amet nisl tempus convallis
                quis ac lectus. Curabitur non nulla sit amet nisl tempus
                convallis quis ac lectus. Vivamus suscipit tortor eget felis
                porttitor volutpat. Vestibulum ant.
              </p>
            </div>
            <Image
              alt=""
              width={580}
              height={310}
              src="/images/about-us-1.png"
              className="before: cursor-pointer rounded-2xl shadow-2xl shadow-gray-600/20"
            />
          </Grid>
          <div className="grid px-12 pb-12 text-center md:grid-cols-4">
            {aboutUs.map((item, index) => (
              <div key={index}>
                <p className="mb-4 font-serif text-7xl font-medium text-orange-200">
                  {item.title}
                </p>
                <p className="font-semibold uppercase">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section>
        <p className="text-center font-serif text-4xl uppercase leading-3 text-gray-100 md:text-8xl">
          ADDMISSION
        </p>
        <SectionHeader title="Attending Our School" className="text-center" />
        <Grid className="md:grid-cols-3 md:gap-24">
          <Cards items={addmission} />
        </Grid>
      </Section>
      <Section>
        <Grid className="items-center rounded-2xl md:grid-cols-2 md:gap-24">
          <div>
            <p className="mb-4 text-xs font-bold uppercase text-orange-200">
              FAQ
            </p>
            <p className="mb-6 font-serif text-5xl">Frequently Asked</p>
            <Accordion items={faq} />
          </div>
          <div>
            <ButtonLink
              colorTheme="third"
              text="Ask A Question"
              size="medium"
            />
            <Image alt="" width={574} height={432} src="/images/faq-1.png" />
          </div>
        </Grid>
      </Section>
      <Section className="bg-[url('/images/bg-1.png')] bg-center bg-no-repeat">
        <div className="py-32">
          <SectionHeader title="Book A Course Today!" className="text-center" />
          <p className="mb-8 text-center">
            Vivamus magna justo, lacinia eget consectetur sed, convallis at
            tellus. Donec rutrum congue
            <br /> leo eget malesuada. Donec rutrum congue leo eget malesuada.
            Quisque velit nisi, pretium ut
            <br />
            lacinia in, elementum id enim. Vivamus magna justo, lacinia eget
            consectetur sed.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <ButtonLink colorTheme="main" text="View all courses" />
            <ButtonLink colorTheme="second" text="Contact Admissions" />
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
}

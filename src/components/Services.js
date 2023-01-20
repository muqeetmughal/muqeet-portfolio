import ServiceBox from "./ui/ServiceBox";

const Services = () => {
  const SERVICES = [
    {
      title: "WordPress Websites",
      description:
        "On demand websites built using popular themes, custom theming with page builders like Elementor, WPBakery",
    },
    {
      title: "Custom Web apps",
      description:
        "Web apps built using frontend frameworks like ReactJs, VueJs, Gatsby with full on content management systems",
    },
    {
      title: "Mobile Apps",
      description:
        "Android and iOS mobile apps development with Flutter, React Native, Swift and PWA apps with adpative design",
    },
    {
      title: "CMS Websites",
      description:
        "Fully resposive and adaptive websites built using well known CMS like WordPress, Weebly, Webflow, Squarspace etc.",
    },
    {
      title: "Graphics Design",
      description:
        "Photo editing, Video editing, logo design, Photoshop, Illustrator, Indesign, Lightroom, Figma, Adobe Xd etc",
    },
    {
      title: "Social media Marketing",
      description:
        "Advertisements, audience engagement, Online Business Growth, Products promotion, brand engagement",
    },
  ];
  return (
    <>
      {SERVICES.map((service) => (
        <ServiceBox
          key={service.title}
          title={service.title}
          description={service.description}
        />
      ))}
    </>
  );
};

export default Services;

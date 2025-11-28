import Link from "next/link";
import { RiArrowRightDoubleFill } from "react-icons/ri";

const footerData = [
  {
    title: "Services",
    items: [
      { name: "Android App Development", link: "android-development-services" },
      { name: "Kotlin App Development", link: "kotlin-app-development-services" },
      { name: "AR/VR App Development", link: "ar-vr-app-development-services" },
      { name: "Unreal Game Development", link: "unreal-game-development-services" },
      { name: "Unity Game Development", link: "unity-game-development-services" },
      { name: "iOS Game Development", link: "ios-game-development-services" },
      { name: "Android Game Development", link: "android-game-development-services" },
      { name: "Nft Game Development", link: "nft-game-development-services" },
    ],
  },
  {
    title: "Hire Developer",
    items: [
      { name: "Hire Flutter Developers", link: "#" },
      { name: "Hire React Native Developers", link: "#" },
      { name: "Hire Ionic Developers", link: "#" },
      { name: "Hire WordPress Developers", link: "#" },
      { name: "Hire ReactJS Developers", link: "#" },
      { name: "Hire Unreal Developers", link: "#" },
      { name: "Hire Full Stack Developers", link: "#" },
      { name: "Hire MEAN Stack Developers", link: "#" },
    ],
  },
  {
    title: "Industries",
    items: [
      { name: "Sport App Development", link: "#" },
      { name: "Media And Entertainment", link: "#" },
      { name: "Logistics And Transportation", link: "#" },
      { name: "E-commerce and Retail", link: "#" },
      { name: "Legal App Development", link: "#" },
      { name: "Travel App Development", link: "#" },
      { name: "Food & Beverage App", link: "#" },
      { name: "Healthcare App Development", link: "#" },
    ],
  },
  {
    title: "Trending Technologies",
    items: [
      { name: "Blockchain Development", link: "#" },
      { name: "NFT Development", link: "#" },
      { name: "ChatGPT Integration", link: "#" },
      { name: "Business Intelligence", link: "#" },
      { name: "Microsoft Technologies", link: "#" },
      { name: "ASP.NET Development", link: "#" },
      { name: "MVC Dotnet Development", link: "#" },
    ],
  },
    {
    title: "Services Area",
    items: [
      { name: "United State", link: "#" },
      { name: "United kingdom", link: "#" },
      { name: "Canada", link: "#" },
      { name: "Bahrain", link: "#" },
      { name: "Australia", link: "#" },
      { name: "Pakistan", link: "#" },
    ],
  },
];

const globalPresence = [
  {
    location: "Head & Finance Office",
    address: "608 Suncrest Way, Sherwood Park, AB T8H 0G7, Canada",
  },
  // {
  //   location: "Dubai, UAE",
  //   address: "Building A1, Dubai Digital Park, Dubai Silicon Oasis, Dubai, United Arab Emirates.",
  // },
  // {
  //   location: "Guangzhou, China",
  //   address:
  //     "Room 3311, East Tower, Yangcheng International Commercial Center, 122 Tiyu East Road, Tianhe District, Guangzhou, China",
  // },
  {
    location: "Delivery & Production Office",
    address:
      "Lahore, Punjab, Pakistan",
  },
];

export default function Footerdata() {
  return (
    <footer
      className="position-relative text-white bg-dark bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/images/footer/footer_bg.webp')` }}
    >
      {/* Overlay */}
      <div className="position-absolute top-0 start-0 end-0 bottom-0 bg-black bg-opacity-75 z-n1"></div>

      <div className="container py-5 position-relative z-1">
        {/* Main Links */}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4 border-bottom border-white pb-4">
          {footerData.map((section, idx) => (
            <div key={idx}>
              <h5 className="text-warning mb-3 fw-semibold">{section.title}</h5>
              <ul className="list-unstyled">
                {section.items.map((item, i) => (
                  <li
                    key={i}
                    className="d-flex align-items-center mb-2 hover-text-warning transition"
                  >
                    <RiArrowRightDoubleFill className="text-warning me-2" />
                    <Link
                      href={item.link}
                      className="text-white text-decoration-none"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Global Presence */}
        <div className="pt-4 pb-3">
          <h5 className="text-warning mb-3 fw-semibold">Our Global Presence</h5>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 border-bottom border-white">
            {globalPresence.map((item, i) => (
              <div key={i}>
                <p className="fw-semibold">{item.location}</p>
                <p>{item.address}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

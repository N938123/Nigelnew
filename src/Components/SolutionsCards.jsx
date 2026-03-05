
// import React from "react";

// import fourth from "../assets/Data&Analytics.png";
// import fifth from "../assets/EarnedMedia.png";
// import sixth from "../assets/PaidMedia.png";
// import seventh from "../assets/Creative.png";

// const cards = [
//   {
//     title: "Creative",
//     icon: seventh,
//     items: [
//       "Performance Creative",
//       "Branding",
//       "Content Production",
//       "Website Design",
//       "Graphic & Motion Design",
//       "Audio Production",
//     ],
//   },
//   {
//     title: "Paid Media",
//     icon: sixth,
//     items: [
//       "Media Strategy & Planning",
//       "Paid Search",
//       "Paid Social",
//       "Programmatic & Display",
//       "Marketplaces",
//       "Streaming Platforms",
//     ],
//   },
//   {
//     title: "Data & Analytics",
//     icon: fourth,
//     items: [
//       "Data Analytics & Insights",
//       "Dashboard Development",
//       "Conversion Rate Optimization",
//       "User Experience",
//       "Front End Development",
//       "Ad Operations",
//     ],
//   },
//   {
//     title: "Earned Media",
//     icon: fifth,
//     items: [
//       "AI Search Optimization",
//       "Search Engine Optimization (SEO)",
//       "App Store Optimization (ASO)",
//       "Content Marketing",
//       "Digital PR",
//       "Influencer Marketing",
//       "Organic Social Media",
//       "Email Marketing",
//     ],
//   },
// ];

// export default function SolutionsCards() {
//   return (
//     <div className="max-w-[1400px] mx-auto px-6 py-12">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className="
//               bg-[#f3f3f3]
//               p-8
//               flex flex-col
//               items-center
//               text-center
//               rounded-md
//             "
//           >
          
//             <div className="w-16 h-16 flex items-center justify-center mb-6">
//               <img
//                 src={card.icon}
//                 alt={card.title}
//                 className="w-16 h-16 object-contain"
//               />
//             </div>

//             <h3 className="text-xl font-extrabold text-[#26282c] mb-6">
//               {card.title}
//             </h3>

//             <ul className="space-y-3 text-sm text-[#333] text-left w-full">
//               {card.items.map((item, i) => (
//                 <li key={i} className="flex items-start gap-3">
//                   <span className="text-[#e10051] mt-[2px]">›</span>
//                   <span>{item}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import React from "react";

import fourth from "../assets/Data&Analytics.png";
import fifth from "../assets/EarnedMedia.png";
import sixth from "../assets/PaidMedia.png";
import seventh from "../assets/Creative.png";

import whatsapp from "../assets/Whatsapp.svg";

const cards = [
  {
    title: "Creative",
    icon: seventh,
    items: [
      "Performance Creative",
      "Branding",
      "Content Production",
      "Website Design",
      "Graphic & Motion Design",
      "Audio Production",
    ],
  },
  {
    title: "Paid Media",
    icon: sixth,
    items: [
      "Media Strategy & Planning",
      "Paid Search",
      "Paid Social",
      "Programmatic & Display",
      "Marketplaces",
      "Streaming Platforms",
    ],
  },
  {
    title: "Data & Analytics",
    icon: fourth,
    items: [
      "Data Analytics & Insights",
      "Dashboard Development",
      "Conversion Rate Optimization",
      "User Experience",
      "Front End Development",
      "Ad Operations",
    ],
  },
  {
    title: "Earned Media",
    icon: fifth,
    items: [
      "AI Search Optimization",
      "Search Engine Optimization (SEO)",
      "App Store Optimization (ASO)",
      "Content Marketing",
      "Digital PR",
      "Influencer Marketing",
      "Organic Social Media",
      "Email Marketing",
    ],
  },
];

export default function SolutionsCards() {

  const PhoneIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2
        19.86 19.86 0 0 1-8.63-3.07
        19.5 19.5 0 0 1-6-6
        19.86 19.86 0 0 1-3.07-8.63
        A2 2 0 0 1 4.11 2h3
        a2 2 0 0 1 2 1.72
        c.12.81.32 1.6.57 2.36
        a2 2 0 0 1-.45 2.11L8.09 9.91
        a16 16 0 0 0 6 6l1.72-1.72
        a2 2 0 0 1 2.11-.45
        c.76.25 1.55.45 2.36.57
        a2 2 0 0 1 1.72 2.11z"
      />
    </svg>
  );

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#f3f3f3] p-8 flex flex-col rounded-md h-full"
          >

           
            <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto">
              <img
                src={card.icon}
                alt={card.title}
                className="w-16 h-16 object-contain"
              />
            </div>

          
            <h3 className="text-xl font-extrabold text-[#26282c] mb-6 text-center">
              {card.title}
            </h3>

            <ul className="space-y-3 text-sm text-[#333] text-left w-full">
              {card.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#e10051] mt-[2px]">›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            
            <div className="mt-auto flex justify-end gap-3 pt-6">

              <a
                href="tel:+919665064435"
                className="w-10 h-10 border border-[#e10051] rounded-md flex items-center justify-center hover:bg-[#e10051] transition"
              >
                <PhoneIcon />
              </a>

              <a
                href="https://wa.me/919665064435"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-[#e10051] rounded-md flex items-center justify-center hover:bg-[#e10051] transition"
              >
                <img src={whatsapp} alt="WhatsApp" className="w-5 h-5" />
              </a>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

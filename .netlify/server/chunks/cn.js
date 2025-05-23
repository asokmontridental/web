const name = "阿速牙科诊所";
const navbar = [
  {
    href: "welcome",
    name: "主页"
  },
  {
    href: "services",
    name: "服务"
  },
  {
    href: "team",
    name: "牙医"
  },
  {
    href: "technology",
    name: "技术"
  },
  {
    href: "promo",
    name: "折扣"
  },
  {
    href: "contact",
    name: "联系"
  }
];
const welcome = {
  title: "欢迎来到阿速牙科诊所",
  text: [
    "Located in the heart of Bangkok, Asok Montri Dental Clinic is on Asok Montri Road, in the proximity of Asoke BTS Station and Sukhumvit MRT Station, providing a comprehensive range of high-quality dental services to both local and international patients.",
    "Our Thai, American, and British certificated dentists are dedicated in their pursuit of excellence and offer their expertise in a courteous and professional manner. We offer our patients the highest quality services in a warm and luxurious environment.",
    "Our multidisciplinary team with over 30 years of experience is headed by Dr. Song Auttawetchakul, American board certified prosthodontist and Dr. Sunee Panyayutthakarn, specialized in oral and dental implant surgery. We provide a complete oral care specialized in implant dentistry, esthetic smile, and also full mouth rehabilitation.",
    "Services comprise of general and specialist dentistry, including orthodontics (braces and Invisalign), endodontics (root canals), prosthodontics (dentures etc), dental implants, oral surgery, pediatric dentistry and cosmetic dental procedures. Sedation and general anesthesia dentistry is also available."
  ]
};
const services = {
  title: "服务",
  text: [
    {
      title: "General dentistry",
      href: "general-dentistry"
    },
    {
      title: "Full mouth rehabilitation",
      href: "full-mouth-rehab"
    },
    {
      title: "Dental implants",
      href: "implants"
    },
    {
      title: "Esthetics",
      href: "esthetics"
    },
    {
      title: "Oral surgery",
      href: "surgery"
    },
    {
      title: "Invisalign",
      href: "invisalign"
    },
    {
      title: "TMJ and occlusion treatment",
      href: "tmj"
    },
    {
      title: "Orthodontics",
      href: "orthodontics"
    },
    {
      title: "Root canal treatment",
      href: "rct"
    },
    {
      title: "Periodontal treatment",
      href: "periodontal"
    },
    {
      title: "Dental anxiety and phobia",
      href: "anxiety-phobia"
    }
  ]
};
const team = {
  title: "牙医",
  text: [
    {
      name: "Dr. Song Auttawetchakul",
      desc: [
        "Cert. (Prosthodontics)",
        "MS. (U Maryland, USA)",
        "Diplomate, American Board of Prosthodontics"
      ]
    },
    {
      name: "Dr. Sunee Panyayutthakarn",
      desc: [
        "Cert. (Surgery)",
        "Cert. (Implant Dentistry) UCLA, USA"
      ]
    },
    {
      name: "Dr. Supawat Puttipart",
      desc: [
        "Master of Science (Orthodontics)"
      ]
    },
    {
      name: "Dr. Porntip Veeriyapak",
      desc: [
        "DDS. MS. Master degree in Periodontics",
        "Chulalongkorn University Post Graduated non-degree in Periodontics.",
        "University of Michigan, Ann Arbor"
      ]
    },
    {
      name: "Dr. Patsri Assadonmingmit",
      desc: [
        "Certificate in endodontics"
      ]
    },
    {
      name: "Dr. Prapon Nipattasat",
      desc: [
        "MSC in Prosthetic Dentistry University of London UK"
      ]
    }
  ]
};
const technology = {
  title: "技术",
  text: [
    "CT scan",
    "Digital X-ray",
    "Dental oral scan by iTero",
    "In-house labratory"
  ]
};
const promo = {
  title: "折扣",
  text: [
    ""
  ]
};
const contact = {
  title: "联系",
  address: [
    "38/8 阿速路",
    "宛他那区",
    "曼谷 10110"
  ],
  email: "电邮",
  phone: "电话",
  line: "LINE ID"
};
const esthetics = {
  title: "Esthetics",
  subtitle: "Your prosthodontist is American Board certified.",
  motto: "Your smile: our specialty.",
  text: [
    "Teeth whitening",
    "Porcelain veneers (e.max)",
    "Porcelain crowns (zirconium)",
    "Porcelain inlays and onlays"
  ]
};
const invisalign = {
  title: "Invisalign",
  text: [
    "Child, teen adult",
    "Invisalign Go",
    "Invisalign First",
    "Invisalign Moderate",
    "Invisalign Comprehensive"
  ]
};
const implants = {
  title: "Dental Implants",
  subtitle: "10,000+ implant procedure, 35 years of experience",
  text: [
    "Immediate implants",
    "Immediate implants with restoration (one visit)",
    "Full mouth dental implants",
    "Multiple implants",
    "Single implant",
    "All-on-4 implants",
    "Computer guided implant surgery"
  ]
};
const surgery = {
  title: "Oral Surgery",
  text: [
    "Sinus graft (100% success rate over 1,000 cases)",
    "Simultaneous implant and sinus graft",
    "Bone graft",
    "Soft tissue graft",
    "Wisdom tooth removal",
    "Embedded tooth removal",
    "Root surgery",
    "Bone and soft tissue surgery"
  ]
};
const rct = {
  title: "Root Canal Treatement",
  text: [
    "Root canal treatment"
  ]
};
const periodontal = {
  title: "Periodontal Treatment",
  text: [
    "Deep cleaning, root planing",
    "Esthetic gum surgery",
    "Peri-implantitis treatment",
    "Bone graft",
    "Gingival graft"
  ]
};
const orthodontics = {
  title: "Orthodontics",
  text: [
    "Orthodontics"
  ]
};
const tmj = {
  title: "TMJ and Occlusion Treatment",
  text: [
    "Tenderness at the joint",
    "Limited movement of the jaw",
    "Dental issues, such as wearing down of teeth"
  ]
};
const cn = {
  name,
  navbar,
  welcome,
  services,
  team,
  technology,
  promo,
  contact,
  "general-dent": {
    title: "General Dentistry",
    text: [
      "Cleaning, scaling, deep cleaning",
      "Filling",
      "Sealant",
      "Fluoride"
    ]
  },
  esthetics,
  "full-mouth-rehab": {
    title: "Full Mouth Rehabilitation",
    subtitle: "Your prosthodontist is American Board certified.",
    text: [
      "Complete dentures with or without implants",
      "Full mouth restoration",
      "Restore vertical dimension",
      "Ceramic zirconium crowns",
      "e.max veneers and crowns"
    ]
  },
  invisalign,
  implants,
  surgery,
  rct,
  periodontal,
  orthodontics,
  "anxiety-phobia": {
    title: "Dentistry Anxiety and Phobia",
    text: [
      "General anesthesia and sedation",
      "Oral sedation and general anesthesia working with anesthesiologist team"
    ]
  },
  tmj
};
export {
  contact,
  cn as default,
  esthetics,
  implants,
  invisalign,
  name,
  navbar,
  orthodontics,
  periodontal,
  promo,
  rct,
  services,
  surgery,
  team,
  technology,
  tmj,
  welcome
};

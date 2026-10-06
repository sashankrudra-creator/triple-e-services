export const services = [
  {
    slug: 'power-plant-om',
    icon: 'Factory',
    title: 'Power Plant O&M',
    short: 'Thermal, Solar, DG and Windmill plants: BTG, BOP, CHP and Ash Handling Plant on a comprehensive or package basis.',
    covers: [
      'Thermal, solar, DG and windmill plants',
      'BTG, BOP, CHP and ash handling plant',
      'Comprehensive or package basis contracts',
      'Preventive, predictive and breakdown maintenance',
      'Shutdown and annual maintenance management',
    ],
    image: '/images/service-1.jpg',
    image: '/images/service-1.jpg'
  },
  {
    slug: 'substation-transmission-om',
    icon: 'Cable',
    title: 'Substation, Switchyard & Transmission O&M',
    short: 'Operation and maintenance of substations, switchyards and transmission lines up to 400 kV.',
    covers: [
      'Substations and switchyards',
      'Transmission lines up to 400 kV',
      'Switchgear, transformers and protection systems',
      'Relay testing and electrical inspection',
      'AMC for double circuit quad lines',
    ],
    image: '/images/service-2.jpg',
    image: '/images/service-2.jpg'
  },
  {
    slug: 'erection-commissioning',
    icon: 'HardHat',
    title: 'Erection & Commissioning',
    short: 'Erection, testing and commissioning of power plants and plant electrical systems.',
    covers: [
      'Power plant erection and commissioning',
      'AFBC boiler erection (mechanical, electrical, C&I)',
      'Substation and switchyard erection',
      'Testing, drawing approvals, CEA and CIEG',
    ],
    image: '/images/service-3.jpg',
  },
  {
    slug: 'pipeline-fabrication',
    icon: 'Wrench',
    title: 'Pipeline Fabrication & Erection',
    short: 'Oil, steam and water pipeline fabrication and erection with IBR-certified, 6G-qualified welders.',
    covers: [
      'Oil, steam and water pipelines',
      'IBR-certified welders, 6G and high-alloy steel',
      'Modular fabrication and cross-country pipelines',
      'In-house NDT: UT, MPI, DP, hardness, radiography',
    ],
    image: '/images/service-4.jpg',
  },
  {
    slug: 'turnkey-projects',
    icon: 'Sun',
    title: 'Turnkey Projects',
    short: 'Turnkey set-up of solar plants, substations, switchyards and more, as a single point of responsibility.',
    covers: [
      'Solar plants',
      'Substations and switchyards',
      'Design, engineering and procurement support',
      'Planning, execution and monitoring',
    ],
    image: '/images/service-5.jpg',
  },
  {
    slug: 'relocation-services',
    icon: 'Truck',
    title: 'Relocation Services',
    short: 'Dismantling, transport and re-erection of plant and equipment with trained rigging teams.',
    covers: [
      'Dismantling and re-erection',
      'Hydra, winches and hoists',
      'Scaffolders and riggers',
      'Heavy and light vehicle drivers',
    ],
    image: '/images/service-6.jpg',
  },
  {
    slug: 'manpower-troubleshooting',
    icon: 'Users',
    title: 'Manpower Outsourcing & Troubleshooting',
    short: 'Special manpower outsourcing and expert troubleshooting from engineers with decades of field experience.',
    covers: [
      'Engineers, supervisors, foremen and technicians',
      'BOE-certified team',
      'Troubleshooting and root cause analysis',
      'Condition monitoring and performance analysis',
    ],
    image: '/images/service-7.jpg',
  },
  {
    slug: 'liaisoning',
    icon: 'FileCheck',
    title: 'Liaisoning of Electrical & Boiler Jobs',
    short: 'Statutory liaison and approvals for electrical and boiler related jobs.',
    covers: ['IBR approvals', 'CIEG approvals', 'PCB approvals', 'Drawing approvals and CEA'],
    image: '/images/service-8.jpg',
  },
];

export const serviceOptions = services.map((s) => s.title);

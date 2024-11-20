import Image from 'next/image';
import externalLinks from '@/../../externalLinks.json';

const fourPointsUrl = externalLinks.fourPointsUrl;

export default function Projects() {
  const commingSoonProjects = [
    {
      type: 'Medium Blog',
      brief: 'UI/UX Essentials for Developers',
      name: 'Four Points UX',
      websiteURL: fourPointsUrl,
      status: 'Coming soon',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      categories: ['design', 'development', 'ui', 'ux', 'web', 'mobile'],
      technologies: ['Figma', 'Adobe Illustrator', 'Medium'],
      imgPath: 'proj/four-points.png',
      CTAText: 'Access',
    },
  ];

  const staks = [
  'React',
  'Node.js',
  'Prisma',
  'MySQL',
  'Figma',
  'Styled Components',
  'Illustrator',
  'Railway',
  'Cloudflare',
  ]
  function openLink(platformLink: string | URL | undefined) {
    if (platformLink) {
      window.open(platformLink, '_blank');
    }
  }

  return (
    <div>
      <h4>Projects</h4>
      <div className="h-1 mt-3 rounded-full w-1/2 bg-gradient-to-r from-lilac-600 to-sky-600"></div>
      <p className="mt-8 mb-24">
       { `Take a look at some of the projects I’ve been working on – each one represents a step in refining my craft, tackling new challenges, and pushing myself to learn and grow.`}
      </p>
      <div className="flex flex-col md:flex-row gap-12 w-full">
        <div className='w-full md:w-1/2 bg-dark-800 border-solid border-1 border-dark-700 rounded-2xl flex flex-col pt-20 pl-20 mb-12 relative'>
         <Image src='proj/chimptok-home.png' alt='chimptok' width={800} height={800} className='rounded-ee-xl'/>
         <Image src='proj/chimp-mascot.png' alt='chimptok' width={200} height={200} className='-bottom-6 -left-6 absolute'/>
        </div>
        <div className="flex flex-col w-full md:w-1/2">
          <h4 className="mt-2">Chimptok</h4>
          <h5 className='mb-3 text-[#FFE179]'>Goal-setting and tracking platform</h5>
          <div className="flex flex-wrap gap-2 max-w-md">
            {staks.map((item, index) => (
              <div
                key={index}
                className="bg-[#FFE179] text-dark-900 font-semibold py-1 px-4 rounded text-center max-w-fit"
              >
                {item}
              </div>
            ))}
          </div>
          <h5 className='mt-12'>Set goals, crush tasks, and swing through progress like a pro!</h5>
          <ul className="list-disc pl-5 leading-tight space-y-4 mt-6 ml-6">
            <li className="text-gray-700"><span className='font-semibold text-white'>Set Goals:</span> clear and measurable goals with deadlines.</li>
            <li className="text-gray-700"><span className='font-semibold text-white'>Timers & Progress:</span> Use timers to focus on tasks and monitor your consistency.</li>
            <li className="text-gray-700"><span className='font-semibold text-white'>Reports & Insights:</span> View streaks, hours worked, overall progress, and more.</li>
          </ul>
          <p className="text-center mt-6 md:text-left md:mt-24"><span className='font-semibold text-white'>Explore Chimptok: </span>
            <a href="https://www.chimptok.com/" target="_blank"  rel="noopener noreferrer" className='cursor-pointer hover:text-[#FFE179]'>www.chimptok.com</a>

          </p>
        </div>

      </div>
      {/* <div className="flex flex-col gap-12 items-center cursor-pointer mt-36">
        {commingSoonProjects.map((item, index) => (
          <div
            key={index}
            className="bg-dark-800 w-full overflow-clip border-solid border-1 border-dark-700 rounded-2xl flex flex-col relative"
          >
            <div className="p-10">
              <p className="mb-2">{item.type}</p>
              <h5>{item.brief}</h5>
              <h6 className="mt-3 text-sm uppercase font-medium tracking-wider text-lilac-600">
                {item.name}
              </h6>
              {item.status === 'Coming soon' && (
                <span className="bg-lilac-700 text-white px-4 py-2 text-xs font-medium rounded-sm mt-6 inline-block">
                  {item.status}
                </span>
              )}
            </div>
            {item.status !== 'Coming soon' && (
              <button
                className="rounded-full hidden md:block absolute right-10 bottom-10"
                onClick={() => openLink(item.websiteURL)}
              >
                {item.CTAText}
              </button>
            )}
            <div className="w-full flex justify-center">
              <Image src={item.imgPath} alt={item.name} width={800} height={800} />
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}

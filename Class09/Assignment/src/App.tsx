import './App.css';

function App() {

  interface User {
    id: number;
    name: string;
    occupation: string;
    description: string;
    highlights: string[];
  }

  const users: User[] = [
    {
      id: 1,
      name: 'AaMna AnSari',
      occupation: "Software Engineer",
      description: "AaMna AnSari is a skilled developer with expertise in building scalable web applications.",
      highlights: [
        "5+ years of experience in full-stack development",
        "Specializes in React and Node.js",
        "Contributor to open-source projects",
        "Loves mentoring junior developers",
        "Passionate about learning new technologies"
      ]
    },
    {
      id: 2,
      name: "Bob Smith",
      occupation: "Graphic Designer",
      description: "Bob has a passion for creating visually compelling designs for brands and businesses.",
      highlights: [
        "7+ years of experience in graphic design",
        "Expert in Adobe Creative Suite",
        "Awarded 'Best Designer of the Year' in 2023",
        "Focuses on user-centered design",
        "Enjoys creating branding for startups"
      ]
    },
    {
      id: 3,
      name: "Charlie Adams",
      occupation: "Content Writer",
      description: "Charlie crafts engaging and SEO-friendly content for blogs and websites.",
      highlights: [
        "6+ years of experience in content creation",
        "Specializes in technical writing and storytelling",
        "Published 200+ articles across various niches",
        "Skilled in SEO optimization",
        "Enjoys creative writing during free time"
      ]
    },
    {
      id: 4,
      name: "Diana Lee",
      occupation: "Marketing Strategist",
      description: "Diana helps businesses grow their online presence through innovative marketing strategies.",
      highlights: [
        "8+ years of experience in marketing",
        "Expert in social media and email marketing",
        "Managed campaigns with $1M+ budgets",
        "Focuses on data-driven decision-making",
        "Enjoys speaking at marketing conferences"
      ]
    }
  ];

  return (
    <>
      <div className="mx-auto grid max-w-lg grid-cols-1 items-center gap-x-6 sm:mt-20 sm:gap-y-6 lg:max-w-4xl lg:grid-cols-2">
        {users.map((user) => (
          <div
            key={user.id}
            className="relative rounded-3xl bg-gray-900 p-4 shadow-2xl ring-1 ring-gray-900/10 sm:p-10"
          >
            <h3 className="text-base/7 font-semibold text-indigo-400">
              {user.occupation}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className="text-5xl font-semibold tracking-tight text-white">{user.name}</span>
            </p>
            <p className="mt-6 text-base/7 text-gray-300">{user.description}</p>
            <ul role="list" className="mt-8 space-y-3 text-sm/6 text-gray-300 sm:mt-10">
              {user.highlights.map((highlight, index) => (
                <li key={index} className="flex gap-x-3">
                  <svg
                    className="h-6 w-5 flex-none text-indigo-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {highlight}
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="mt-8 block rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 sm:mt-10"
            >
              Submit
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;

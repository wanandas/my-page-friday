import { cn } from '@/lib/utils';

// fetch data from api
type IData = {
  id: number;
  created_at: string;
  description: string;
  full_name: string;
  html_url: string;
  language: string;
};

const fetchData = async () => {
  const url = process.env.NEXT_GITHUB_REPOS_URL as string;
  const repos = await fetch(`${url}?per_page=100&sort=created`);
  const data = await repos.json();
  const result = data.map((v: any) => {
    return {
      id: v.id,
      created_at: v.created_at,
      description: v.description,
      full_name: v.full_name,
      html_url: v.html_url,
      language: v.language,
    };
  });
  return result as IData[];
};

export default async function projects() {
  const projects = await fetchData();
  return (
    <div className="p-4 pb-12">
      <h1 className="mb-8 text-center text-4xl">GITHUB PROJECT</h1>
      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        {projects.map(data => (
          <a
            key={data.id}
            href={data.html_url}
            className="flex h-full flex-col justify-between"
            target="_blank"
            rel="noreferrer"
          >
            <p
              className={cn(
                'max-w-36 flex flex-col justify-between rounded-md border p-3 transition duration-300 ease-in-out md:max-w-2xl',
                'hover:scale-105 hover:border-gray-300 hover:bg-gray-100 hover:text-gray-900 hover:opacity-100 hover:shadow-md',
              )}
            >
              <span className="text-right text-sm">
                {new Date(data.created_at).toLocaleDateString('en-US')}
              </span>
              <span className="line-clamp-2 text-xl font-medium ">
                {data.full_name}
              </span>
              <span className="text-md line-clamp-3">{data.description}</span>
              <span className="text-left text-sm text-gray-600">
                {data.language}
              </span>
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}

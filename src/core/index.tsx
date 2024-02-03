// // get All my repo
// const url = process.env.NEXT_GITHUB_REPOS_URL as string;
// const repos = await fetch(`${url}?per_page=100&sort=created`);

// const data = await repos.json();

// const result = data?.map((v: IData) => {
//   // return only id, created_at, description, full_name, html_url, language
//   return {
//     id: v.id,
//     created_at: v.created_at,
//     description: v.description,
//     full_name: v.full_name,
//     html_url: v.html_url,
//     language: v.language,
//   };
// });

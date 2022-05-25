import { Octokit } from "@octokit/rest";

export default async (req, res) => {
  const octokit = new Octokit({
    auth: process.env.GITHUB_AUTH_TOKEN,
  });
  const repos = await octokit.request("/users/serkanurganci/repos");
  return res.status(200).json(repos.data);
};

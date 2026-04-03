import { Octokit } from "@octokit/rest";

function getOctokit() {
  return new Octokit({ auth: process.env.GITHUB_TOKEN });
}

const OWNER = process.env.GITHUB_OWNER!;
const REPO = process.env.GITHUB_REPO!;
const BRANCH = process.env.GITHUB_BRANCH ?? "main";

function blogPath(slug: string) {
  return `content/blog/${slug}.mdx`;
}

/** Get the current SHA of a file (needed for updates/deletes) */
async function getFileSha(slug: string): Promise<string | null> {
  const octokit = getOctokit();
  try {
    const { data } = await octokit.repos.getContent({
      owner: OWNER,
      repo: REPO,
      path: blogPath(slug),
      ref: BRANCH,
    });
    if ("sha" in data) return data.sha;
    return null;
  } catch {
    return null;
  }
}

/** Create or update an MDX file in the repo */
export async function commitPost(slug: string, mdxContent: string, message?: string) {
  const octokit = getOctokit();
  const sha = await getFileSha(slug);
  const isNew = !sha;

  const content = Buffer.from(mdxContent, "utf-8").toString("base64");
  const commitMessage = message ?? (isNew ? `blog: add ${slug}` : `blog: update ${slug}`);

  await octokit.repos.createOrUpdateFileContents({
    owner: OWNER,
    repo: REPO,
    path: blogPath(slug),
    message: commitMessage,
    content,
    branch: BRANCH,
    ...(sha ? { sha } : {}),
  });
}

/** Delete an MDX file from the repo */
export async function deletePost(slug: string) {
  const octokit = getOctokit();
  const sha = await getFileSha(slug);
  if (!sha) throw new Error(`File not found: ${slug}`);

  await octokit.repos.deleteFile({
    owner: OWNER,
    repo: REPO,
    path: blogPath(slug),
    message: `blog: delete ${slug}`,
    sha,
    branch: BRANCH,
  });
}

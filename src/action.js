const core = require('@actions/core');
const github = require('@actions/github');

async function run(){
    const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');
    const octokit = github.getOctokit(GITHUB_TOKEN);

    const { contex = {} } = github;
    const { pull_request } = contex.payload;

    await octokit.issues.createComment({
        ...context.repo,
        issue_number: pull_request.number,
        body: 'Obrigado pelo novo Pull Request!'
      });
}


run();
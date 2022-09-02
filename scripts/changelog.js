const fs = require("fs");
const axios = require("axios");
var changelog = `Please refer to [CHANGELOG.md](https://github.com/tezjs/tez.js/blob/main/CHANGELOG.md) for details.`;
var exceptList = ["ajayojha"];

var Msg = `\n\n**Special thanks to Contributors:** \n\n\n`;

const repoOwner = "tezjs";
const repo = "tezjs";
const adminRepoUserName = "ajayojha";
const githubToken = process.argv[2];

(async function () {

    var obj = { contributors: {}, issues: {} };

    const getReleases = await axios.get(`https://api.github.com/repos/${repoOwner}/${repo}/releases`, { auth: { "username": adminRepoUserName, "password": githubToken } });
    const prevReleaseDate = new Date(getReleases.data[0].created_at);
    const newReleaseDate = new Date();


    var page = 1;
    var pullRequests = await axios.get(`https://api.github.com/repos/${repoOwner}/${repo}/pulls?state=closed&per_page=100&page=${page}`, { auth: { "username": adminRepoUserName, "password": githubToken } });

    while (pullRequests.data.length) {
        for (var request of pullRequests.data) {
            const pullRequestDate = new Date(request.created_at);

            if (prevReleaseDate < pullRequestDate && pullRequestDate < newReleaseDate && !exceptList.includes(request.user.login)) {
                if (obj.contributors[request.user.login] === undefined)
                    obj.contributors[request.user.login] = {};

                if (obj.contributors[request.user.login]["pullRequestNumber"] === undefined)
                    obj.contributors[request.user.login]["pullRequestNumber"] = [];
                obj.contributors[request.user.login]["pullRequestNumber"].push(request.number);
            }
        }
        page++;
        var pullRequests = await axios.get(`https://api.github.com/repos/${repoOwner}/${repo}/pulls?state=closed&per_page=100&page=${page}`, { auth: { "username": adminRepoUserName, "password": githubToken } });
    }

    var contributorMd;
    for (var contributor of Object.keys(obj.contributors)) {

        contributorMd = `@${contributor} `;
        for (var Number of obj.contributors[contributor].pullRequestNumber) {
            if (Number + 1 === obj.contributors[contributor].pullRequestNumber.length)
                var pullNumber = `#${Number} \n`
            else
                var pullNumber = `#${Number} `

            contributorMd = contributorMd.concat(pullNumber);
        }
        Msg = Msg.concat(contributorMd);
    }

    var markdown = changelog.trim().concat("\n", Msg);

    if (Object.keys(obj.contributors).length > 0) {
        changelog = markdown;
        Msg = "";
    }


    // issues
    var page = 1;
    var issues = await axios.get(`https://api.github.com/repos/${repoOwner}/${repo}/issues?state=closed&per_page=100&page=${page}`, { auth: { "username": adminRepoUserName, "password": githubToken } });

    while (issues.data.length) {
        for (var issue of issues.data) {
            const issueDate = new Date(issue.created_at);

            if (prevReleaseDate < issueDate && issueDate < newReleaseDate && !exceptList.includes(issue.user.login)) {
                for (var label of issue.labels) {
                    if (["bug", "feature"].includes(label.name)) {
                        if (obj.issues[issue.user.login] === undefined)
                            obj.issues[issue.user.login] = [];

                        obj.issues[issue.user.login].push({ label: label.name, title: issue.title, issueNumber: issue.number, html_url: issue.html_url });
                    }
                }
            }
        }
        page++;
        var issues = await axios.get(`https://api.github.com/repos/${repoOwner}/${repo}/pulls?per_page=100&page=${page}`, { auth: { "username": adminRepoUserName, "password": githubToken } });
    }


    var issueMd;
    for (var issuer of Object.keys(obj.issues)) {
        issueMd = `@${issuer} `;

        for (var object of obj.issues[issuer]) {
            const Number = object.issueNumber;
            if (Number + 1 === obj.issues[issuer].length)
                var issueNumber = `#${Number} \n`
            else
                var issueNumber = `#${Number} `

            issueMd = issueMd.concat(issueNumber);
        }
        Msg = Msg.concat(issueMd, "\n");
    }

    var markdown = changelog.trim().concat("\n", Msg);

    if (Object.keys(obj.issues).length > 0)
        changelog = markdown;

    fs.writeFileSync("../temp.md", changelog)
})();

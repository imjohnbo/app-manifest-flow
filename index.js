const initialize = () => {
    // Step 1: https://developer.github.com/apps/building-github-apps/creating-github-apps-from-a-manifest/#1-you-redirect-people-to-github-to-create-a-new-github-app 
    const baseUrl = `https://api.github.com`;
    const githubUrl = `${baseUrl}/settings/apps/new?state=${Math.random() * 10000}`;
    
    const formEl = document.getElementById('form');
    formEl.action = githubUrl;


}

const setupListeners = () => {
    const githubUrlEl = document.getElementById('github-url');
    const formEl = document.getElementById('form');
    const inputEl = document.getElementById('manifest');

    let githubUrl = '';

    githubUrlEl && document.addEventListener('change', (e) => githubUrl = e.target.value);

    formEl && document.addEventListener('submit', (e) => {
        inputEl.value = JSON.stringify({
            "name": "App Manifest Flow",
            "url": "https://app-manifest-flow.glitch.me/",
            "description": "App Manifest Flow App",
            "hook_attributes": {
                "url": "https://app-manifest-flow.glitch.me/hooks",
            },
            "redirect_url": "https://app-manifest-flow.glitch.me/flow",
            "public": false,
            "default_permissions": {
                "issues": "write"
            },
            "default_events": [
                "issues",
                "issue_comment"
            ]
        });
    });
};

const run = () => {
    initialize();
    setupListeners();
};



// Start me up
(run)();
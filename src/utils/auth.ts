/**
 * Workaround for auth redirect not working
 * 
 * See: https://answers.netlify.com/t/common-issue-netlify-cms-git-gateway-email-not-confirmed/10690/26
 */
window.addEventListener('load', () => {    
    if (window.location.hash.includes('_token=')) {
      window.location.replace('/admin/' + window.location.hash);
    }
})
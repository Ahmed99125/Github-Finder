class GitHub {
  constructor() {
    this.client_id = '3c6a838473e494712f34';
    this.client_secret = '4d3e82f56e0e905cef427af9f95a5d38cc06d7b0';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileRes = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
    const profile = await profileRes.json();
    
      const reposRes = await fetch(`https://api.github.com/users/${user}/repos?per page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

      const repos = await reposRes.json();
      
    return {
      profile,
      repos
    }
  }

}
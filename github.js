class GitHub {
  constructor(){
    this.client_id='08dfaa145a839f253fbf';
    this.client_secret='0e4f6d534cdccc0410e1f3c734567659c03da766';
    this.repos_count=5;
    this.repos_sort='created:asc';
  }

  async getUser(user){
    const profileResponse= await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const reposResponse= await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);


    const profile= await profileResponse.json();
    const repos= await reposResponse.json();

    return {
      profile:profile,
      repos:repos
    }
  }
}

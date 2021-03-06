import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IGithubUserContributionResponse } from '../../model/githubContribution';

@Injectable()
export class RepositoryContributionsService {

  githubRestApiUrl = 'https://api.github.com/repos';

  constructor(
    private httpClient: HttpClient
  ) {}

  // In the GraphQL API of github, there is no possibility to fetch the contributors
  // of a repository from the repository node easliy. 
  // So we rely on the REST endpoint to do so.
  getTopContributorsOfRepository(repoNameWithOwner: string) {
    return this.httpClient.get<IGithubUserContributionResponse[]>(`${this.githubRestApiUrl}/${repoNameWithOwner}/contributors`);
  }
}
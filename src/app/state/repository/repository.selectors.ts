import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromRepository from './repository.reducer';

export const selectRepositoryState = createFeatureSelector<fromRepository.RepositoryState>('repositories');

export const selectAllRepositories = createSelector(
  selectRepositoryState,
  fromRepository.selectAllRepositories
);

export const selectRepositorySearchTerm = createSelector(
  selectRepositoryState,
  (state: fromRepository.RepositoryState) => state.searchTerm
);

export const selectSelectedRepositoryId = createSelector(
  selectRepositoryState,
  (state: fromRepository.RepositoryState) => state.selectedRepositoryId
);
# Branch Protection Rules

This document outlines the branch protection rules set for the repository:

## Main Branch Protection

### Required Checks
1. All CI checks must pass:
   - Build check
   - Test suite
   - Linting
   - Security scan
   - Code quality analysis

### Enforcement Rules
1. Require pull request reviews before merging
   - Required number of reviewers: 1
   - Dismiss stale pull request approvals when new commits are pushed
   - Require review from Code Owners

2. Require status checks to pass before merging
   - Require branches to be up to date before merging
   - Required status checks:
     - build (ubuntu-latest, node 16.x)
     - build (ubuntu-latest, node 18.x)
     - security
     - code-quality

3. Require signed commits

4. Include administrators in these restrictions

### Branch Rules
1. Do not allow direct pushes to main
2. Do not allow force pushes
3. Do not allow deletions

## Development Branch Guidelines

### Branch Naming Convention
- feature/* : For new features
- bugfix/* : For bug fixes
- hotfix/* : For critical fixes
- release/* : For release preparation
- docs/* : For documentation updates

### Merging Strategy
1. Create feature branch from main
2. Develop and test in feature branch
3. Create pull request to main
4. Get required reviews
5. Pass all automated checks
6. Merge using squash merge

## Pull Request Guidelines
1. Must reference an issue
2. Must have descriptive title
3. Must follow pull request template
4. Must pass all automated checks
5. Must be reviewed and approved
6. Must be up to date with main branch

## Code Review Requirements
1. At least one approval from team member
2. No unresolved comments
3. All conversations must be resolved
4. Code style guidelines followed
5. Tests included and passing

## Automated Checks
1. CI Pipeline must pass:
   - Build validation
   - Unit tests
   - Integration tests
   - Linting
   - Type checking
2. Security scanning
3. Code quality metrics
4. Test coverage requirements

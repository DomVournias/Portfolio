import { GITHUB_TOKEN } from '$env/static/private';
import type { PageServerLoad } from './$types';

const USERNAME = 'DomVournias';

const QUERY = `
  query($username: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $username) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
            }
          }
        }
      }
    }
  }
`;

export const load: PageServerLoad = async ({ fetch }) => {
	const to = new Date();
	const from = new Date();
	from.setFullYear(from.getFullYear() - 1);

	try {
		const res = await fetch('https://api.github.com/graphql', {
			method: 'POST',
			headers: {
				Authorization: `bearer ${GITHUB_TOKEN}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				query: QUERY,
				variables: { username: USERNAME, from: from.toISOString(), to: to.toISOString() }
			})
		});

		const json = await res.json();
		const calendar = json.data.user.contributionsCollection.contributionCalendar;

		const contributions: { date: string; count: number }[] = calendar.weeks.flatMap(
			(week: { contributionDays: { date: string; contributionCount: number }[] }) =>
				week.contributionDays.map((day) => ({
					date: day.date,
					count: day.contributionCount
				}))
		);

		return {
			githubActivity: {
				total: calendar.totalContributions as number,
				contributions
			}
		};
	} catch (e) {
		console.error('GitHub contributions fetch failed:', e);
		return { githubActivity: { total: 0, contributions: [] } };
	}
};

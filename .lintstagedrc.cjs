module.exports = {
	'**/*.{js,ts,cjs,svelte,tsx}': [() => 'npm run typecheck', 'npm run lint'],
};

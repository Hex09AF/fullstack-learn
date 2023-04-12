import { loadLocaleAsync } from '$lib/i18n/i18n-util.async';
import type { LayoutLoad } from './$types';

export const load = (async (event) => {
	// TODO: possibly use navigatorDetector as well
	const { locale } = event.data;
	await loadLocaleAsync(locale);

	return event.data;
}) satisfies LayoutLoad;

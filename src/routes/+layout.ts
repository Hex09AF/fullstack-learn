import type { LayoutLoad } from './$types';
import { loadLocaleAsync } from '$lib/i18n/i18n-util.async';
import { detectLocale } from '$lib/i18n/i18n-util';

export const load = (async (event) => {
	// TODO: possibly use navigatorDetector as well
	const locale = event.data.locale;
	await loadLocaleAsync(locale);

	return event.data;
}) satisfies LayoutLoad;

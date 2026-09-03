import { expect, test } from '@playwright/test';

/**
 * E2E de la landing. Se ejecuta contra el build de producción prerenderizado
 * (ver playwright.config.ts), no contra el dev server: lo que se prueba es lo
 * que se despliega.
 */

test.beforeEach(async ({ page }) => {
	await page.goto('/');
});

test('presenta el juego en el primer pantallazo', async ({ page }) => {
	await expect(page).toHaveTitle(/Killer/);
	await expect(page.getByRole('heading', { level: 1 })).toHaveText('Killer');
	await expect(page.getByText('El battle royale que se juega con los pies.')).toBeVisible();
});

test('explica las cinco fases de la ejecución', async ({ page }) => {
	const section = page.locator('#la-ejecucion');

	for (const phase of ['Fase 1', 'Fase 2', 'Fase 3', 'Fase 4', 'Fase 5']) {
		await expect(section.getByText(phase, { exact: true })).toBeVisible();
	}

	await expect(section.getByRole('heading', { name: 'Testigos' })).toBeVisible();
});

test('la navegación lleva a cada sección', async ({ page }) => {
	await page.getByRole('link', { name: 'Cómo funciona' }).first().click();
	await expect(page).toHaveURL(/#como-funciona$/);
	await expect(page.locator('#como-funciona')).toBeInViewport();
});

test('el contenido se ve aunque el navegador no anime al hacer scroll', async ({ page }) => {
	// El revelado es mejora progresiva: los elementos .reveal NUNCA deben quedar
	// invisibles, ni siquiera antes de entrar en el viewport.
	await page.emulateMedia({ reducedMotion: 'reduce' });
	await page.reload();

	const revealed = page.locator('.reveal');
	await expect(revealed.first()).toBeVisible();
	expect(await revealed.count()).toBeGreaterThan(5);
});

test('las dudas se abren y se cierran', async ({ page }) => {
	const question = page.getByRole('group').filter({ hasText: '¿Cuándo sale?' });
	const answer = page.getByText(/Primero Android; iOS después/);

	await expect(answer).toBeHidden();
	await question.getByText('¿Cuándo sale?').click();
	await expect(answer).toBeVisible();
});

test('es navegable por teclado desde el salto al contenido', async ({ page }) => {
	await page.keyboard.press('Tab');
	await expect(page.getByRole('link', { name: 'Saltar al contenido' })).toBeFocused();
});

test('no provoca scroll horizontal en móvil', async ({ page }) => {
	await page.setViewportSize({ width: 360, height: 740 });

	const overflow = await page.evaluate(
		() => document.documentElement.scrollWidth - document.documentElement.clientWidth
	);
	expect(overflow).toBeLessThanOrEqual(0);
});

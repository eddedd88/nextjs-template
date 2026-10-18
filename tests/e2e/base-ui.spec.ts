import { expect, test } from '@playwright/test'

test('links retain link semantics and FAQ items can expand independently', async ({
  page,
}) => {
  await page.goto('/')
  await expect(
    page.getByRole('link', { name: 'See Dashboard' }),
  ).toHaveAttribute('href', '/dash')
  const first = page.getByRole('button', {
    name: 'What is the purpose of this website?',
  })
  const second = page.getByRole('button', {
    name: 'How do I get started with this template?',
  })
  await first.click()
  await second.click()
  await expect(first).toHaveAttribute('aria-expanded', 'true')
  await expect(second).toHaveAttribute('aria-expanded', 'true')
  await first.click()
  await expect(first).toHaveAttribute('aria-expanded', 'false')
  await expect(second).toHaveAttribute('aria-expanded', 'true')
})

test('mobile drawer opens, closes with Escape, and restores focus', async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  const trigger = page.getByRole('button', { name: 'Toggle Menu' })
  await trigger.click()
  const drawer = page.getByRole('dialog', { name: 'Menu', exact: true })
  await expect(drawer).toBeVisible()
  await expect(drawer.getByRole('link', { name: 'Pricing' })).toHaveAttribute(
    'href',
    '/pricing',
  )
  await page.keyboard.press('Escape')
  await expect(drawer).toBeHidden()
  await expect(trigger).toBeFocused()
})

test('feedback dialog and user menu support keyboard dismissal', async ({
  page,
}) => {
  const errors: string[] = []
  page.on('pageerror', error => errors.push(error.message))
  await page.goto('/dash')
  const trigger = page.getByRole('button', { name: 'Feedback', exact: true })
  await trigger.click()
  const dialog = page.getByRole('dialog', { name: 'Send Feedback' })
  await expect(dialog).toBeVisible()
  await dialog.getByRole('button', { name: 'Submit' }).click()
  await expect(dialog.getByRole('textbox')).toBeFocused()
  expect(
    await dialog
      .getByRole('textbox')
      .evaluate(
        (element: HTMLTextAreaElement) => element.validity.valueMissing,
      ),
  ).toBe(true)
  await expect(dialog).toBeVisible()
  await page.keyboard.press('Escape')
  await expect(dialog).toBeHidden()
  await expect(trigger).toBeFocused()
  await trigger.click()
  await dialog.getByRole('button', { name: 'Close', exact: true }).click()
  await expect(dialog).toBeHidden()
  const menuTrigger = page.getByRole('button', { name: 'Open user menu' })
  await menuTrigger.focus()
  await page.keyboard.press('ArrowDown')
  await expect(page.getByRole('menuitem', { name: 'Logout' })).toBeVisible()
  await expect(page.getByText('johndoe@example.com')).toBeVisible()
  await page.keyboard.press('Escape')
  await expect(page.getByRole('menu')).toBeHidden()
  await expect(menuTrigger).toBeFocused()
  expect(errors).toEqual([])
})

test('controlled fields validate, focus the invalid input, submit, and reset', async ({
  page,
}) => {
  await page.goto('/dash/sample-form')
  const name = page.getByRole('textbox', { name: 'Name', exact: true })
  const description = page.getByRole('textbox', {
    name: 'Description',
    exact: true,
  })
  await page.getByRole('button', { name: 'Submit', exact: true }).click()
  await expect(name).toHaveAttribute('aria-invalid', 'true')
  await expect(name).toBeFocused()
  await expect(description).toHaveAttribute('aria-invalid', 'true')
  await name.fill('Jane Doe')
  await description.fill('Checking the migrated Base UI controls.')
  await page.getByRole('button', { name: 'Submit', exact: true }).click()
  await expect(page.getByText('Saved sample form for Jane Doe')).toBeVisible()
  await expect(name).toHaveValue('')
  await expect(description).toHaveValue('')
})

test('file preview stays disabled until a file is selected', async ({
  page,
}) => {
  await page.goto('/dash/sample-upload')
  const trigger = page.getByRole('button', { name: 'View', exact: true })
  await expect(trigger).toBeDisabled()
  const chooserPromise = page.waitForEvent('filechooser')
  await page.getByRole('button', { name: 'Choose files' }).click()
  const chooser = await chooserPromise
  await chooser.setFiles({
    name: 'example.csv',
    mimeType: 'text/csv',
    buffer: Buffer.from('name,value\nexample,1\n'),
  })
  await expect(trigger).toBeEnabled()
  await trigger.click()
  const dialog = page.getByRole('dialog', { name: '1 Selected file' })
  await expect(dialog.getByText('example.csv')).toBeVisible()
  await dialog.getByRole('button', { name: 'Close', exact: true }).click()
  await expect(dialog).toBeHidden()
  await page.getByRole('button', { name: 'Clear', exact: true }).click()
  await expect(trigger).toBeDisabled()
})

import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { expect, it } from 'vitest'
import App from './App.vue'

it('renders the Hello World message', async () => {
  const html = await renderToString(createSSRApp(App))

  expect(html).toContain('Hello World')
})

import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { expect, it } from 'vitest'
import HelloWorld from './components/HelloWorld.vue'

it('renders the msg prop', async () => {
  const html = await renderToString(
    createSSRApp(HelloWorld, { msg: 'Hello from the test' }),
  )

  expect(html).toContain('Hello from the test')
})

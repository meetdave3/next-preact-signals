import Link from 'next/link'
import { Count } from '../components/count'
import { IncrementButton } from '../components/increment'
import { DecrementButton } from '../components/decrement'
import { countState } from '../lib/counter-state'

const state = countState()

export default function IndexPage() {
  return (
    <div>
      Hello World.{' '}
      <ul>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/ssr" prefetch={false}>
            <a>SSR</a>
          </Link>
        </li>
        <li>
          <Link href="/ssg">
            <a>SSG</a>
          </Link>
        </li>
      </ul>

      <Count count={state.count} />
      <IncrementButton fn={state.increment}  />
      <DecrementButton fn={state.decrement} />
    </div>
  )
}

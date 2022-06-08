import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import unfetch from 'isomorphic-unfetch'
import slug from 'slug'

export default function Home({ characters }) {
  return (
    <Layout>
      <Head>
        <title>Tarık Home</title>
      </Head>
      <main>
        <h1 className="title">
          İlk web siteme hoşgeldin <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <ul>
          {characters.results.map((character) => (
            <li key={character.id}>
              <Link
                href="/character/[slug]"
                as={`/character/${slug(character.name)}-${character.id}`}
              >
                <a>{character.name}</a>
              </Link>
            </li>
          ))}
        </ul>

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const data = await unfetch('https://rickandmortyapi.com/api/character')
  const characters = await data.json()
  return {
    props: {
      characters
    }
  }
}

import Head from 'next/head'
import Layout from '../../components/layout'
import unfetch from 'isomorphic-unfetch'
import slug from 'slug'

export default function ({ character }) {
  return (
    <Layout>
      <Head>
        <title>{character.name}</title>
      </Head>
      <div>
        <figure>
          <h3> {character.name}</h3>
          <img src={character.image} />
        </figure>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const data = await unfetch('https://rickandmortyapi.com/api/character')
  const characters = await data.json()
  return {
    paths: characters.results.map((character) => {
      return { params: { slug: `${slug(character.name)}-${character.id}` } }
    }),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const id = params.slug.split('-').slice(-1)[0]

  const data = await unfetch('https://rickandmortyapi.com/api/character/' + id)
  const character = await data.json()
  return {
    props: {
      character
    }
  }
}

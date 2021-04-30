import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import Header from '../components/Header'
import SearchResults from '../components/SearchResults'
import Response from '../response.json'


const Search = ({ results }) => {



	const router = useRouter()
	return (
		<div>
			<Head>
				<title>{router.query.term} - Google Search</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<SearchResults results={results} />
		</div>
	)
}

export default Search


export async function getServerSideProps(context) {
	// console.log('ENV', process.env.DB_API_KEY);
	const useDummyData = false;
	const startIndex = context.query.start || "0"
	const data = useDummyData ? Response : await (await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.DB_API_KEY}&cx=${process.env.DB_CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`)).json()
	return {
		props: {
			results: data
		}
	}
}
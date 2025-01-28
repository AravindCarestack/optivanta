import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import Content from '~/components/Content'
import { readToken } from '~/lib/sanity.api'
import {
  getALLHomeSettings,
  getAllPMS,
  getALLSiteSettings,
  getComparisonTableData,
  getFounderDetails,
  getAllComparisonValues,
  fetchMembership,
  memberShipQuery
} from '~/lib/sanity.queries'
import type { SharedPageProps } from '~/pages/_app'
import Layout from '../components/Layout'
import CustomHead from '~/components/common/CustomHead'
import BookDemoContextProvider from '~/providers/BookDemoProvider'
import runQuery from '~/utils/runQuery'

export const getStaticProps: GetStaticProps<SharedPageProps> = async ({
  draftMode = false,
}) => {
  const homeSettings = await runQuery(getALLHomeSettings())
  const siteSettings = await runQuery(getALLSiteSettings())
  const founderDetails = await runQuery(getFounderDetails())
  const comparisonTableData = await runQuery(getComparisonTableData())
  const allPMS = await runQuery(getAllPMS())
  const comparisonLegend = await runQuery(getAllComparisonValues())
  const memberShip = await runQuery(memberShipQuery)
  
  return {
    props: {
      homeSettings,
      siteSettings,
      founderDetails,
      comparisonTableData,
      allPMS,
      draftMode,
      comparisonLegend,
      token: draftMode ? readToken : '',
      memberShip
    },
  }
  
}

export default function IndexPage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  console.log(props)
  return (
    <div>
      <BookDemoContextProvider>
        <Layout {...props}>
          <CustomHead {...props} />
          <Content {...props} />
        </Layout>
      </BookDemoContextProvider>
    </div>
  )
}

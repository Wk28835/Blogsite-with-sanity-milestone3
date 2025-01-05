import { createClient } from 'next-sanity'

import { apiVersion} from '../env'

 const sanityClient = createClient({
  projectId:"bi0dbr1q",
  dataset:"production",
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
export default sanityClient;
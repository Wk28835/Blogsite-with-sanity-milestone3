import { createClient } from 'next-sanity'

import { apiVersion} from '../env'

 const sanityClient = createClient({
  projectId:"bi0dbr1q",
  dataset:"production",
  token:"skqWq2RL3Lx4RXXdaj2IkfehcQ31zQCfDuY7EpdGBY0Evr6gtiaSax4p78K0F6O7tV62SVyvfL0d7iRBsCKKoNPABjzJtKJOcX8Tj3cl0wMs2prBh5wJ2wBSWj8WnX69sShhjmIRaipZConmZDVtyFf2siQ23f3rSJDnQGW480xRb8C43PMB",
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
export default sanityClient;

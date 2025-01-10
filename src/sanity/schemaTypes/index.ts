import { type SchemaTypeDefinition } from 'sanity'
import blog from '../blog'
import comments from '../comments'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog,comments],
}

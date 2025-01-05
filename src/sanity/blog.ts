

// sanity/pet.ts
export default {
    name: 'blog',
    type: 'document',
    title: 'blog',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'author',
            type: 'string',
            title: 'Author',
        },
        {
            name: 'blog',
            type: 'string',
            title: 'blog',
        },
        {
            name: 'image',
            type: 'image',
            title: 'Picture',
            options: {
                hotspot: true, // Enables focal point selection
            },
        },
       
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
              source: 'title',
              maxLength: 96,
            },
        },
    ],
};
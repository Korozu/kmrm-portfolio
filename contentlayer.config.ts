import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Album = defineDocumentType(() => ({
    name: 'Album',
    filePathPattern: 'albums/**/*.md',
    fields: {
        title: { type: 'string', required: true },
        artist: { type: 'string', required: true },
        date: { type: 'date', required: true },
        cover: { type: 'string', required: true },
        images: { type: 'list', of: { type: 'string' }, required: true },
    },
    computedFields: {
        slug: { type: 'string', resolve: (doc) => doc._raw.flattenedPath.split('/').pop() },
    }
}))

export default makeSource({
    contentDirPath: 'content',
    documentTypes: [Album],
})
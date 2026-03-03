import { defineDocumentType, defineNestedType, makeSource } from 'contentlayer/source-files';

// On définit ce qu'est une "Image avec EXIF"
const ImageObject = defineNestedType(() => ({
    name: 'ImageObject',
    fields: {
        src: { type: 'string', required: true },
        shutterSpeed: { type: 'string', required: false, default: '' },
        aperture: { type: 'string', required: false, default: '' },
        iso: { type: 'string', required: false, default: '' },
    },
}));

const NetworkLink = defineNestedType(() => ({
    name: 'NetworkLink',
    fields: {
        facebook: { type: 'string', default: '' },
        instagram: { type: 'string', default: '' },
        spotify: { type: 'string', default: '' },
        youtube: { type: 'string', default: '' },
    }
}));

export const Album = defineDocumentType(() => ({
    name: 'Album',
    filePathPattern: 'albums/**/*.md',
    fields: {
        title: { type: 'string', required: true },
        artist: { type: 'string', required: true },
        venue: { type: 'string', required: true },
        network: { type: 'nested', of: NetworkLink },
        date: { type: 'date', required: true },
        cover: { type: 'string', required: true },
        images: { type: 'list', of: ImageObject, required: true },
    },
    computedFields: {
        slug: { type: 'string', resolve: (doc) => doc._raw.flattenedPath.split('/').pop() },
    }
}));

export default makeSource({
    contentDirPath: 'content',
    documentTypes: [Album],
});
